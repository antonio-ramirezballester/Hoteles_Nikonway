import * as usersController from '../controllers/usersController.js';

import {verifyToken} from "./../middleware/auth.js";
import express from "express";

const router = express.Router();

// Register user
router.post("/register", usersController.registerUser);

// User login function
router.post("/login", usersController.loginUser);

// landing page. Secure Route
router.get("/landing", verifyToken , (req, res) => { //El verifytoken protege la ruta. Si no está autenticado no puede entrar a esa ruta.
    res.status(200).json({
        "message":"ESTÁS EN LA LANDING PAGE 😎"
    });
});

router.get("/user/:id", verifyToken , usersController.getUserById);

// This should be the last route else any after it won't work
router.use("*", (req, res) => {
    res.status(404).json({
        success: "false",
        message: "Page not found",
        error: {
            statusCode: 404,
            message: "You reached a route that is not defined on this server",
        },
    });
});

export default router;
