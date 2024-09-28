import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import {
  createProjectValidation,
  createTaskValidation,
  updateTaskValidation,
} from "../utils/validation";

const prisma = new PrismaClient();

const getTasks = async (req: Request, res: Response): Promise<void> => {
  try {
    const { projectId } = req.query;

    if (projectId && isNaN(Number(projectId))) {
      res.status(400).json({ message: "Invalid projectId" });
    }

    const tasks = await prisma.task.findMany({
      where: {
        projectId: Number(projectId),
      },
      include: {
        author: true,
        comments: true,
        attachments: true,
        assignee: true,
      },
    });

    res.status(200).json(tasks);
  } catch (error: any) {
    res.status(500).json({ message: `Something went wrong: ${error.message}` });
  }
};

const createTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      title,
      description,
      status,
      tags,
      points,
      priority,
      startDate,
      dueDate,
      projectId,
      assignedUserId,
      authorUserId,
    } = createTaskValidation.parse(req.body);

    const newTask = await prisma.task.create({
      data: {
        title,
        description,
        status,
        tags,
        points,
        priority,
        startDate,
        dueDate,
        projectId,
        assignedUserId,
        authorUserId,
      },
    });

    res.status(201).json(newTask);
  } catch (error: any) {
    res.status(500).json({ message: `Something went wrong: ${error.message}` });
  }
};

export const updateTaskStatus = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { taskId } = req.params;
    const { status } = updateTaskValidation.parse(req.body);

    console.log(taskId, status);

    if (taskId && isNaN(Number(taskId))) {
      res.status(400).json({ message: "Invalid Task " });
    }
    const updatedTask = await prisma.task.update({
      where: {
        id: Number(taskId),
      },
      data: {
        status: status,
      },
    });
    res.json(updatedTask);
  } catch (error: any) {
    res.status(500).json({ message: `Error updating task: ${error.message}` });
  }
};

export const getUserTasks = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { userId } = req.params;

    if (userId && isNaN(Number(userId))) {
      res.status(400).json({ message: "Invalid userId" });
    }

    const tasksforUser = await prisma.task.findMany({
      where: {
        OR: [
          {
            authorUserId: Number(userId),
          },
          {
            assignedUserId: Number(userId),
          },
        ],
      },
      include: {
        author: true,
        assignee: true,
      },
    });

    res.status(200).json(tasksforUser);
  } catch (error: any) {
    res.status(500).json({ message: `Something went wrong: ${error.message}` });
  }
};

export { getTasks, createTask };
