import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;

    if (req.method === 'DELETE') {
        if (typeof id !== 'string') {
            return res.status(400).json({ error: 'Invalid ID' });
        }

        try {
            const deletedBook = await prisma.book.delete({
                where: { id: Number(id) }
            });
            res.status(200).json({ message: 'Book deleted successfully', deletedBook });
        } catch (error) {
            console.error('Error deleting book:', error);
            res.status(500).json({ error: 'An error occurred while deleting the book' });
        }
    } else {
        res.setHeader('Allow', ['DELETE']);
        res.status(405).json({ error: 'Method not allowed' });
    }
}
