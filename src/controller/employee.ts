import { Request, Response } from "express";
import employeeBusiness from '../business/employee'
export class EmployeeController {
    public async getAllEmployees(req: Request, res: Response) {
        try {
            const result = await employeeBusiness.getAllEmployees()
            res.status(200).send(result)
        } catch (err) {
            res.status(400).send(err)
        }
    }
    public async newEmployee(req: Request, res: Response) {
        try {
            const newEmployee = req.body
            await employeeBusiness.newEmployee(newEmployee)
            res.status(200).send({message:"success"})
        } catch (err) {
            res.status(400).send(err)
        }
    }
    public async updateEmployee(req: Request, res: Response) {
        try {
            const id: number = Number(req.params.id)
            const employee = req.body
            await employeeBusiness.updateEmployee(id, employee)
            res.status(200).send({message:"success"})
        } catch (err) {
            res.status(400).send(err)
        }
    }
    public async deleteEmployee(req: Request, res: Response) {
        try {
            const id: number = Number(req.params.id)
            await employeeBusiness.deleteEmployee(id)
            res.status(200).send({message:"success"})
        } catch (err) {
            res.status(400).send(err)
        }
    }
    public async getEmployee(req: Request, res: Response) {
        try {
            console.log(req.params);
            
            const id = Number(req.params.id)
            const result = await employeeBusiness.getEmployee(id)
            console.log(result)
            if(!result)
                throw new Error("Not found");
            res.status(200).send(result)
        } catch (err) {
            res.status(400).send(err)
        }
    }
}
const employeeController = new EmployeeController()
export default employeeController;