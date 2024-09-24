import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { createProjectValidation } from "../utils/validation";

const prisma = new PrismaClient();

const getProjects = async (req: Request, res: Response): Promise<void> => {
  try {
    const projects = await prisma.project.findMany();

    res.status(200).json(projects);
  } catch (error: any) {
    res.status(500).json({ message: `Something went wrong: ${error.message}` });
  }
};

const createProject = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, description, startDate, endDate } =
      createProjectValidation.parse(req.body);

    const newProject = await prisma.project.create({
      data: {
        name,
        description,
        startDate,
        endDate,
      },
    });

    res.status(201).json(newProject);
  } catch (error: any) {
    res.status(500).json({ message: `Something went wrong: ${error.message}` });
  }
};

export { getProjects, createProject };
