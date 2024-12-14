import express from "express";
const router = express.Router();
import * as UsersController from "../app/controllers/UsersController.js";
import * as TaskController from "../app/controllers/TaskController.js";
import AuthMiddleware from "../app/middleware/AuthMiddleware.js";


// Users
router.post("/registration",UsersController.Registration);
router.post("/login",UsersController.Login)
router.get("/profileDetails",AuthMiddleware,UsersController.ProfileDetails);
router.post("/profileUpdate",AuthMiddleware,UsersController.UpdateProfile);
router.get("emilVerify",UsersController.EmailVerification);
router.post("/codeVerify",UsersController.CodeVerification);
router.post("/resetPassword",UsersController.ResetPassword);

// Task

router.post("/createTask",AuthMiddleware,TaskController.CreateTask);
router.get("/updateTaskStatus",AuthMiddleware,TaskController.UpdateTaskStatus);
router.get("/taskListByStatus",AuthMiddleware,TaskController.TaskListByStatus);
router.delete("/deleteTask",AuthMiddleware,TaskController.DeleteTask);
router.get("/countTask",AuthMiddleware,TaskController.CountTask);




export default router;