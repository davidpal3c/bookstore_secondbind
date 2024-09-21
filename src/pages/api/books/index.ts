import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { title, author, genre } = req.query;
    const filters: { [key: string]: any } = {};

    if (title) filters['title'] = { contains: title as string };
    if (author) filters['author'] = { contains: author as string };
    if (genre) filters['genre'] = { contains: genre as string };

    const books = await prisma.book.findMany({
        where: filters,
    });

    res.status(200).json(books);
}
