import { EmployeeDataBase } from '../database/employee'
import employeeDataBase from '../database/employee'
import { Employee } from '../model/employee'
import { stringify } from 'uuid';
export class EmployeeBusiness {
    constructor(
        private employeeDataBase: EmployeeDataBase
    ) { }
    async newEmployee(employee: any) {
        try {
            if (!employee.name || !employee.email || !employee.birth_date || !employee.admission_date)
                throw new Error("Invalid Input");
            if (["ENGENHARIA", "COMPRAS", "VENDAS", "FINANCEIRO"].indexOf(employee.sector.toUpperCase()) < 0)
                throw new Error("Invalid Input Sector");
            if (["ENGENHEIRO", "AUXILIAR", "TÉCNICO", "TECNICO", "DIRETOR"].indexOf(employee.position.toUpperCase()) < 0)
                throw new Error("Invalid Input Position");
            if (["JÚNIOR", "JÚNIOR", "PLENO", "SÊNIOR", "ESTAGIÁRIO"].indexOf(employee.level.toUpperCase()) < 0)
                throw new Error("Invalid Input Level");
            const today = new Date().toISOString().slice(0, 10);
            employee.insertDate = today
            await this.employeeDataBase.newEmployee(employee)
        } catch (err) {
            console.log(err)
            throw err
        }
    }
    async updateEmployee(id: number, employee: any) {
        try {
            if (!id)
                throw new Error("invalid id");
            if (!employee.name || !employee.email || !employee.birth_date || !employee.admission_date || !employee.insert_date || !employee.update_date)
                throw new Error("Invalid Input");
            if (["ENGENHARIA", "COMPRAS", "VENDAS", "FINANCEIRO"].indexOf(employee.sector.toUpperCase()) < 0)
                throw new Error("Invalid Input Sector");
            if (["ENGENHEIRO", "AUXILIAR", "TÉCNICO", "TECNICO", "DIRETOR"].indexOf(employee.position.toUpperCase()) < 0)
                throw new Error("Invalid Input Position");
            if (["JÚNIOR", "JÚNIOR", "PLENO", "SÊNIOR", "ESTAGIÁRIO"].indexOf(employee.level.toUpperCase()) < 0)
                throw new Error("Invalid Input Level");
            const today = new Date().toISOString().slice(0, 10);
            employee.update_date = today
            await this.employeeDataBase.updateEmployee(id, employee)
        } catch (err) {
            console.log(err)
            throw err
        }
    }
    async deleteEmployee(id: number) {
        try {
            if (!id)
                throw new Error("invalid id");
            await this.employeeDataBase.deleteEmployee(id)
        } catch (err) {
            throw err
        }
    }
    async getAllEmployees() {
        try {
            return await this.employeeDataBase.getAllEmployees()
        } catch (err) {
            throw err
        }
    }
    async getEmployee(id: number) {
        try {
            if (!id)
                throw new Error("invalid id");
            return await this.employeeDataBase.getEmployee(id)
        } catch (err) {
            throw err
        }
    }
}
const employeeBusiness = new EmployeeBusiness(employeeDataBase)
export default employeeBusiness