import express, { Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

/* CONFIGURATION */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/*Router import */
import projectRoutes from "./routes/project.route";
import taskRoutes from "./routes/task.route";
import searchRoutes from "./routes/search.route";
import userRoutes from "./routes/user.route";
import teamRoutes from "./routes/team.route";
app.get("/", (req, res) => {
  res.send("Server is up and runninng");
});

app.use("/projects", projectRoutes);
app.use("/tasks", taskRoutes);
app.use("/search", searchRoutes);
app.use("/users", userRoutes);
app.use("/teams", teamRoutes);

/* Server */

const port = process.env.PORT || 3030;
app.listen(port, () => {
  console.log(`Server is up and running on ${port}`);
});
