import express from "express";
import cors from "cors";
import "dotenv/config";
import taskRoutes from "./routes/taskRoutes.js";
import motivationRoutes from "./routes/motivationRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/tasks", taskRoutes);
app.use("/api/motivation", motivationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
