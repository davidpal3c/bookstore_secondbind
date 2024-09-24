import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { title, author, genre } = req.query;

    // define filters object with specific type
    const filters: {
        title?: { contains: string };
        author?: { contains: string };
        genre?: { contains: string };
    } = {};

    if (typeof title === 'string') filters.title = { contains: title };
    if (typeof author === 'string') filters.author = { contains: author };
    if (typeof genre === 'string') filters.genre = { contains: genre };

    try {
        const books = await prisma.book.findMany({
            where: filters,
        });
        res.status(200).json(books);
    } catch (error) {
        console.error('Error fetching books:', error);
        res.status(500).json({ error: 'An error occurred while fetching books' });
    }
}
