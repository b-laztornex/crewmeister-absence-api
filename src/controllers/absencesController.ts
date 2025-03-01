import { Request, Response, NextFunction } from "express";
import { query } from "../db";

export const getAllAbsences = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await query("SELECT * FROM absences ORDER BY id");
    res.json({ message: "Success", payload: result.rows });
  } catch (error) {
    next(error);
  }
};

export const getAbsenceById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const result = await query("SELECT * FROM absences WHERE id = $1", [id]);
    if (result.rows.length === 0) {
      res.status(404).json({ message: "Not Found" });
    } else {
      res.json({ message: "Success", payload: result.rows[0] });
    }
  } catch (error) {
    next(error);
  }
};
