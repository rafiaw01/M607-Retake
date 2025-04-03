// The code for expense route


import { getExpensesByCategory } from "../controllers/expenseController";

import { Router } from "express";

const router = Router();

router.get("/", getExpensesByCategory);

export default router;