# Employees

API of a table of Employees.

## API:

### 1. Get all employees

#### Method: GET 
#### url: /actionsys/
#### Content-Type: application/json
#### Response:
An Array of employees, like the exemple below:

        [
        {   
            "id":1,
            "name": "emp.name",
            "email": "emp.email",
            "birth_date": "1990-05-23",
            "admission_date": "1990-05-23",
            "sector": "ENGENHARIA",
            "position": "ENGENHEIRO",
            "level": "PLENO",
            "insert_date": "1990-05-23",
            "update_date": "1990-05-23"
        },
        {
            "id":2
            "name": "emp.name",
            "email": "emp.email",
            "birth_date": "1990-05-23",
            "admission_date": "1990-05-23",
            "sector": "ENGENHARIA",
            "position": "ENGENHEIRO",
            "level": "PLENO",
            "insert_date": "1990-05-23",
            "update_date": "1990-05-23"
        }
        ]

### 2. Get an employee by id:

#### Method: GET 
#### url: /actionsys/:id
Path params id integer.
#### Content-Type: application/json
#### Response:
An object employee, like the exemple below:

        {
            "id":2
            "name": "emp.name",
            "email": "emp.email",
            "birth_date": "1990-05-23",
            "admission_date": "1990-05-23",
            "sector": "ENGENHARIA",
            "position": "ENGENHEIRO",
            "level": "PLENO",
            "insert_date": "1990-05-23",
            "update_date": "1990-05-23"
        }

### 3. Create an employee:

#### Method: POST
#### url: /actionsys/
#### Content-Type: application/json
#### Body:
        {
            "name": "emp.name",
            "email": "emp.email",
            "birth_date": "1990-05-23",
            "admission_date": "1990-05-23",
            "sector": "ENGENHARIA",
            "position": "ENGENHEIRO",
            "level": "PLENO"
        }

name, email, sector and position are strings. 
Sector only accepts values "engenharia", "compras", "vendas" and "financeiro" (lower ou upper case).
Position only accepts values "auxilia", "tecnico", "técnico", "engenheiro" and "director" (lower ou upper case).
Level only accepts values "júnior","junior", "pleno", "sênior", "senior", "estagiário" and "estagiário" (lower ou upper case).
admission_date, birth_date are Date types "YYYY-MM-DD".

#### Response:
        {message:"success"}

### 4. Update an employee:

#### Method: Patch
#### url: /actionsys/:id
Path params id is a number.

#### Content-Type: application/json
#### Body:
        {
            "id":2,
            "name": "emp.name",
            "email": "emp.email",
            "birth_date": "1990-05-23",
            "admission_date": "1990-05-23",
            "sector": "ENGENHARIA",
            "position": "ENGENHEIRO",
            "level": "PLENO",
            "insert_date": "1990-05-23",
            "update_date": "1990-05-23"
        }

name, email, sector and position are strings. 
Sector only accepts values "engenharia", "compras", "vendas" and "financeiro" (lower ou upper case).
Position only accepts values "auxilia", "tecnico", "técnico", "engenheiro" and "director" (lower ou upper case).
Level only accepts values "júnior","junior", "pleno", "sênior", "senior", "estagiário" and "estagiário" (lower ou upper case).
admission_date, birth_date are Date, insert_date, update_date  types "YYYY-MM-DD".

#### Response:
        {message:"success"}

### 5. Delete an employee:

#### Method: Delete
#### url: /actionsys/:id
Path params id is a number.
#### Content-Type: application/json
#### Response:
        {message:"success"}


## Table:

        CREATE TABLE actionsys(
            id INT NOT NULL AUTO_INCREMENT,
            name VARCHAR(200) NOT NULL ,
            email VARCHAR(100) UNIQUE NOT NULL ,
            birth_date DATE NOT NULL ,
            admission_date DATE NOT NULL,
            sector ENUM('ENGENHARIA', 'COMPRAS', 'FINANCEIRO', 'VENDAS') NOT NULL ,
            position ENUM('AUXILIAR', 'TÉCNICO', 'ENGENHEIRO', 'DIRETOR') NOT NULL ,
            level ENUM ('JÚNIOR', 'PLENO', 'SÊNIOR', 'ESTAGIÁRIO') NOT NULL ,
            insert_date DATE NOT NULL ,
            update_date DATE default("none"),
            PRIMARY KEY (id)
        );
