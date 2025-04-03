// the import is to create a dashboard route 
// using the following code 


import { getDashboardMetrics } from "../controllers/dashboardController";
import { Router } from "express";


const router = Router();

router.get("/", getDashboardMetrics);

export default router;