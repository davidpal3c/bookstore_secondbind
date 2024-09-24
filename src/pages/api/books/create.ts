import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { title, author, genre, publicationDate, isbn } = req.body;

        if (!title || !author || !genre || !publicationDate || !isbn) {
            return res.status(400).json({ error: "All fields are required" });
        }

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
            res.status(201).json(newBook);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Error creating book" });
        }

    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).json({ error: "Method not allowed" });
    }
}
