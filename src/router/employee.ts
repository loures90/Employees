import express from "express";
import employeeController from "../controller/employee";
// import { UserController } from "../controller/UserController";

export const employeeRouter = express.Router();

// const userController = new UserController();

employeeRouter.post("/",employeeController.newEmployee);
employeeRouter.patch("/:id", employeeController.updateEmployee);
employeeRouter.delete("/:id", employeeController.deleteEmployee);
employeeRouter.get("/:id", employeeController.getEmployee);
employeeRouter.get("/", employeeController.getAllEmployees);
