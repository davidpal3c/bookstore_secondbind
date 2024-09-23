import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;

    if (req.method === 'DELETE') {
        try {
            await prisma.book.delete({
                where: { id: Number(id) }
            });
            res.status(200).json({ message: 'Book deleted successfully' });
        } catch (error) {
            res.status(400).json
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}