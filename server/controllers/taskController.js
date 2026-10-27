import prisma from "../config/prisma.js";

export const getTasks = async (_req, res) => {
  const tasks = await prisma.task.findMany({ orderBy: { createdAt: "desc" } });
  res.json(tasks);
};

export const createTask = async (req, res) => {
  const { title } = req.body;
  if (!title || !title.trim()) return res.status(400).json({ error: "Task title is required" });
  const task = await prisma.task.create({ data: { title: title.trim() } });
  res.status(201).json(task);
};

export const updateTask = async (req, res) => {
  const id = Number(req.params.id);
  const task = await prisma.task.update({ where: { id }, data: { completed: Boolean(req.body.completed) } });
  res.json(task);
};
