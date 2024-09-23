import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;

    if (req.method === 'PUT') {
        const { title, author, genre, publicationDate, isbn } = req.body;

        try {
            const updateBook = await prisma.book.update({
                where: { id: Number(id) },
                data: { title, author, genre, publicationDate: new Date(publicationDate), isbn },
            });
            res.status(200).json(updatedBook);
        } catch (error) {
            res.status(400).json({ error: 'Error updating book' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}