import express from "express";
import type { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { db } from "../utils/db.server";
import { request } from "http";
import * as BookService from "./book.service";

export const bookRouter = express.Router();

// get All Book
bookRouter.get("/", async (request: Request, response: Response) => {
  try {
    const bookRead = await BookService.listBooks();
    return response.status(200).json(bookRead);
  } catch (error: any) {
    return response.status(500).json(error.message);
  }
});

// get book by id
bookRouter.get("/:id", async (request: Request, response: Response) => {
  const id: number = parseInt(request.params.id, 10);
  try {
    const bookRead = await BookService.getBook(id);
    if (bookRead) {
      return response.status(200).json(bookRead);
    }
    return response.status(404).json("Book could not be found");
  } catch (error: any) {
    return response.status(500).json(error.message);
  }
});

// create new book
// request body : title, isFiction, authorId,datePublished
bookRouter.post(
  "/",
  body("title").isString(),
  body("isFiction").isBoolean(),
  body("authorId").isInt(),
  body("datePublished").isDate(),
  async (request: Request, response: Response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }
    try {
      const book = request.body;
      const newBook = await BookService.createBook(book);
      return response.status(201).json(newBook);
    } catch (error: any) {
      return response.status(500).json(error.message);
    }
  }
);

// update book
// params : id
// request body  title, isFiction, authorId,datePublished

bookRouter.put(
  "/:id",
  body("title").isString(),
  body("isFiction").isBoolean(),
  body("authorId").isInt(),
  body("datePublished").isDate(),
  async (request: Request, response: Response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }

    const id: number = parseInt(request.params.id, 10);
    try {
      const book = request.body;
      const updatedbook = await BookService.updateBook(book, id);
      return response.status(200).json(updatedbook);
    } catch (error: any) {
      return response.status(500).json(error.message);
    }
  }
);

// delete Book
// params : id
bookRouter.delete("/:id", async (request: Request, response: Response) => {
  const id: number = parseInt(request.params.id, 10);
  try {
    await BookService.deleteBook(id);
    return response.status(204).json("Book has been deleted");
  } catch (error: any) {
    return response.status(500).json(error.message);
  }
});
