export class Employee {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private birthDate: Date,
        private admissionDate: Date,
        private sector: string,
        private position: string,
        private level: string,
        private insertDate: Date,
        private updateDate: Date

    ) { }
    getId() {
        return this.id
    }
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
    getUpdateDate() {
        return this.updateDate
    }

    setId(id: string) {
        this.id = id
    }
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
    setUpdateDate(updateDate: Date) {
        this.updateDate = updateDate
    }


}