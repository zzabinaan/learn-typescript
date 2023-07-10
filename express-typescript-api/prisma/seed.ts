// load default data

import { db } from "../src/utils/db.server";

type Author = {
  firstName: string;
  lastName: string;
};

type Book = {
  title: string;
  isFiction: boolean;
  datePublished: Date;
};

async function seed() {
  await Promise.all(
    getAuthors().map((author) => {
      return db.author.create({
        data: {
          firstName: author.firstName,
          lastName: author.lastName,
        },
      });
    })
  );
  const author = await db.author.findFirst({
    where: {
      firstName: "Rebbeca",
    },
  });

  if (author) {
    await Promise.all(
      getBooks().map((book) => {
        const { title, isFiction, datePublished } = book;
        return db.book.create({
          data: {
            title,
            isFiction,
            datePublished,
            authorId: author.id,
          },
        });
      })
    );
  }
}

seed();

function getAuthors(): Array<Author> {
  return [
    {
      firstName: "Rebbeca",
      lastName: "Siklot",
    },
    {
      firstName: "Michelle",
      lastName: "Obama",
    },
    {
      firstName: "Harper",
      lastName: "Lee",
    },
  ];
}

function getBooks(): Array<Book> {
  return [
    {
      title: "The Immortal Life of Henrietta Lacks",
      isFiction: false,
      datePublished: new Date(),
    },
    {
      title: "Becoming",
      isFiction: false,
      datePublished: new Date(),
    },
    {
      title: "To Kill a Mockingbird",
      isFiction: true,
      datePublished: new Date(),
    },
  ];
}
