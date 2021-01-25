

DROP DATABASE IF EXISTS employee_sql_tracker;

CREATE DATABASE employee_sql_tracker;


CREATE TABLE department (
    id INT  NOT NULL auto_increment,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id) 

); 


CREATE TABLE role (
    id INT NOT NULL auto_increment,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY (department_id)
        REFERENCES department(id),
    PRIMARY KEY (id)           
); 


CREATE TABLE employee (
    id INT NOT NULL auto_increment,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT, 
    manager_id INT,
    FOREIGN KEY (role_id)
        REFERENCES employee(id),
    FOREIGN KEY (manager_id)
        REFERENCES employee(id),
    PRIMARY KEY (id)          
); 