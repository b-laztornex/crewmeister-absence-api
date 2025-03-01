import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import absencesRoutes from "./routes/absences";
import membersRoutes from "./routes/members";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/absences", absencesRoutes);
app.use("/api/members", membersRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
