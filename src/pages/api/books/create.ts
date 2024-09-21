import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { title, author, genre, publicationDate, isbn } = req.body;
        try {
            const newBook = await prisma.book.create({
                data: {
                    title,
                    author,
                    genre,
                    publicationDate: new Date(publicationDate),
                    isbn,
                },
            });
            res.status(200).json(newBook);
        } catch (error) {
            res.status(400).json({ error: "Error creating book" });
        }

    } else {
        res.status(405).json({ error: "Method not allowed" });
    }

}