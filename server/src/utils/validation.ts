import z from "zod";

const createProjectValidation = z.object({
  name: z
    .string()
    .min(3)
    .max(20)
    .regex(/[A-Za-z0-9_.]+$/),
  description: z.string().min(10).max(2000),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
});

const createTaskValidation = z.object({
  title: z
    .string()
    .min(3)
    .max(20)
    .regex(/[A-Za-z0-9_.]+$/),
  description: z.string().min(10).max(2000),
  status: z.string().optional(),
  priority: z.string().optional(),
  tags: z.string().optional(),
  startDate: z.string().optional(),
  dueDate: z.string().optional(),
  points: z.number().optional().nullish(),
  projectId: z.number(),
  authorUserId: z.number(),
  assignedUserId: z.number(),
});

const updateTaskValidation = z.object({
  status: z.string(),
});

export { createProjectValidation, createTaskValidation, updateTaskValidation };
