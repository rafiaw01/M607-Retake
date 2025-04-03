// Used to create a user route 


import { Router } from "express";

import { getUsers } from "../controllers/userController";

const router = Router();

router.get("/", getUsers);

export default router;