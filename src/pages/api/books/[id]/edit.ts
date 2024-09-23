import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";  // Correct Prisma import

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;

    if (req.method === 'PUT') {
        const { title, author, genre, publicationDate, isbn } = req.body;

        try {
            const updatedBook = await prisma.book.update({
                where: { id: Number(id) },
                data: {
                    title,
                    author,
                    genre,
                    publicationDate: new Date(publicationDate),  // Ensure proper date format
                    isbn
                },
            });
            res.status(200).json(updatedBook);  // Corrected variable name
        } catch (error) {
            console.error('Error updating book:', error);  // Add detailed logging for better debugging
            res.status(400).json({ error: 'Error updating book' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
