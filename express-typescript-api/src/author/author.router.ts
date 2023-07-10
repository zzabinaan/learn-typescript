import express from "express";
import type { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { db } from "../utils/db.server";
import { request } from "http";
import * as AuthorService from "./author.service";

export const authorRouter = express.Router();

// get all authors
authorRouter.get("/", async (request: Request, response: Response) => {
  try {
    const authors = await AuthorService.listAuthors();
    return response.status(200).json(authors);
  } catch (error: any) {
    return response.status(500).json(error.message);
  }
});

// get single Author by ID
authorRouter.get("/:id", async (request: Request, response: Response) => {
  const id: number = parseInt(request.params.id, 10);
  try {
    const authors = await AuthorService.getAuthor(id);
    if (authors) {
      return response.status(200).json(authors);
    }
    return response.status(404).json("Author could not be found");
  } catch (error: any) {
    return response.status(500).json(error.message);
  }
});

// create new author
// request body : firstName, lastName
authorRouter.post(
  "/",
  body("firstName").isString(),
  body("lastName").isString(),
  async (request: Request, response: Response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }
    try {
      const author = request.body;
      const newAuthor = await AuthorService.createAuthor(author);
      return response.status(201).json(newAuthor);
    } catch (error: any) {
      return response.status(500).json(error.message);
    }
  }
);

// update author
// request body : firstName, lastName
// params : id
authorRouter.put(
  "/:id",
  body("firstName").isString(),
  body("lastName").isString(),
  async (request: Request, response: Response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }

    const id: number = parseInt(request.params.id, 10);
    try {
      const author = request.body;
      const updatedAuthor = await AuthorService.updateAuthor(author, id);
      return response.status(200).json(updatedAuthor);
    } catch (error: any) {
      return response.status(500).json(error.message);
    }
  }
);

// delete Author
// params : id
authorRouter.delete("/:id", async (request: Request, response: Response) => {
  const id: number = parseInt(request.params.id, 10);
  try {
    await AuthorService.deleteAuthor(id);
    return response.status(204).json("Author has been deleted");
  } catch (error: any) {
    return response.status(500).json(error.message);
  }
});
