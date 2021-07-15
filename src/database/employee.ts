import { NewEmployeeInput, EmployeeInput } from "../model/employee"
import { BaseDatabase } from "./baseDataBase";

export class EmployeeDataBase extends BaseDatabase {
    protected tableName = "actionsys"
    async newEmployee(newEmployee: any) {
        try {
            await this.connection(this.tableName)
                .insert({
                    name: newEmployee.name,
                    email: newEmployee.email,
                    birth_date: newEmployee.birth_date,
                    admission_date: newEmployee.admission_date,
                    sector: newEmployee.sector,
                    position: newEmployee.position,
                    level: newEmployee.level,
                    insert_date: newEmployee.insertDate,
                    update_date:newEmployee.insertDate
                });
        } catch (err) {
            console.log(err)
            throw err;
        }
    }
    async updateEmployee(id: number, emp: any) {
        try {
            await this.connection(this.tableName)
                .update({
                    name: emp.name,
                    email: emp.email,
                    birth_date: emp.birthDate,
                    admission_date: emp.admissionDate,
                    sector: emp.sector,
                    position: emp.position,
                    level: emp.level,
                    insert_date: emp.insertDate,
                    update_date: emp.updateDate
                }).where({id});
        } catch (err) {
            console.log(err)
            throw err;
        }
    }
    async deleteEmployee(id: number) {
        try {
            const result: any = await this.connection(this.tableName)
                .delete()
                .where({ id })
        } catch (err) {
            throw err;
        }
    }
    async getAllEmployees(): Promise<any> {
        try {
            const result = await this.connection(this.tableName)
                .select('*');
            return result
        } catch (err) {
            throw err;
        }
    }
    async getEmployee(id: number): Promise<EmployeeInput> {
        try {
            const result: any = await this.connection(this.tableName)
                .select("*")
                .where({ id })

            return result[0];
        } catch (err) {
            throw err;
        }
    }
}
const employeeDataBase = new EmployeeDataBase()
export default employeeDataBase