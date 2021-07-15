

export class Employee {
    constructor(
        // private id: string,
        private name: string,
        private email: string,
        private birthDate: Date,
        private admissionDate: Date,
        private sector: string,
        private position: string,
        private level: string,
        private insertDate: Date,
        // private updateDate: Date

    ) { }
    
    // getId() {
    //     return this.id
    // }
    getName() {
        return this.name
    }
    getEmail() {
        return this.email
    }
    getBirthDate() {
        return this.birthDate
    }
    getAdmissionDate() {
        return this.admissionDate
    }
    getSector() {
        return this.sector
    }
    getPosition() {
        return this.position
    }
    getLevel() {
        return this.level
    }
    getInsertDate() {
        return this.insertDate
    }
    // getUpdateDate() {
    //     return this.updateDate
    // }

    // setId(id: string) {
    //     this.id = id
    // }
    setName(name: string) {
        this.name = name
    }
    setEmail(email: string) {
        this.email = email
    }
    setBirthDate(birthDate: Date) {
        this.birthDate = birthDate
    }
    setAdmissionDate(admissionDate: Date) {
        this.admissionDate = admissionDate
    }
    setSector(sector: string) {
        this.sector = this.sector
    }
    setPosition(position: string) {
        this.position = position
    }
    setLevel(level: string) {
        this.level = level
    }
    setInsertDate(insertDate: Date) {
        this.insertDate = insertDate
    }
    // setUpdateDate(updateDate: Date) {
    //     this.updateDate = updateDate
    // }
    static validateEmployee(employee: NewEmployeeInput):NewEmployeeInput {
        if (!employee.name || !employee.email || !employee.birthDate || !employee.admissionDate)
            throw new Error("Invalid Input");
        if (!employee.sector.includes("ENGENHARIA, COMPRAS, VENDAS, FINANCEIRO"))
            throw new Error("Invalid Input");
        if (!employee.position.includes("ENGENHEIRO, AUXILIAR, TÉCNICO, TECNICO, DIRETOR"))
            throw new Error("Invalid Input");
        if (!employee.level.includes("JÚNIOR, JÚNIOR, PLENO, SÊNIOR , ESTAGIÁRIO"))
            throw new Error("Invalid Input");
        return employee

    }
}

export enum EMPLOYEE_SETOR {
    ENGENHARIA = 'ENGENHARIA',
    COMPRAS = 'COMPRAS',
    VENDAS = 'VENDAS',
    FINANCEIRO = 'FINANCEIRO'
}

export enum EMPLOYEE_POSITIONS {
    ENGENHEIRO = 'ENGENHEIRO',
    AUXILIAR = 'AUXILIAR',
    TECNICO = 'TÉCNICO',
    DIRETOR = 'DIRETOR'
}

export enum EMPLOYEE_LEVEL {
    JUNIOR = 'JUNIOR',
    PLENO = 'PLENO',
    SENIOR = 'SENIOR',
    ESTAGIARIO = 'ESTAGIÁRIO'
}

export interface NewEmployeeInput {
    name: string,
    email: string,
    birthDate: Date,
    admissionDate: Date,
    sector: string,
    position: string,
    level: string,
    insertDate: Date,
}
export interface EmployeeInput {
    id: number,
    name: string,
    email: string,
    birthDate: Date,
    admissionDate: Date,
    sector: string,
    position: string,
    level: string,
    insertDate: Date,
    updateDate: Date,
}

