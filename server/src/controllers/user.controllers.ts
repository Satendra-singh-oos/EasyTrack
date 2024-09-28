import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const { projectId } = req.query;

    if (projectId && isNaN(Number(projectId))) {
      res.status(400).json({ message: "Invalid projectId" });
    }

    const users = await prisma.user.findMany();

    res.status(200).json(users);
  } catch (error: any) {
    res.status(500).json({ message: `Something went wrong: ${error.message}` });
  }
};

export { getUsers };
