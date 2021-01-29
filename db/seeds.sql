INSERT INTO department (name) VALUES ('water');
INSERT INTO department (name) VALUES ('energy');
INSERT INTO department (name) VALUES ('electric');
INSERT INTO department (name) VALUES ('city planning');
INSERT INTO department (name) VALUES ('power');

INSERT INTO role (title,salary,department_id) VALUES ('Filtration Specialist', 50000, 1);
INSERT INTO role (title,salary,department_id) VALUES ('Nuclear Plant Tech', 120000, 2);
INSERT INTO role (title,salary,department_id) VALUES ('Electrician', 80000, 3);
INSERT INTO role (title,salary,department_id) VALUES ('City Planner', 100000, 4);
INSERT INTO role (title,salary,department_id) VALUES ('Engineer', 150000, 5);


INSERT INTO employee (first_name,last_name,role_id,manager_id) VALUES ('Stephanie', 'Freyler', 1, NULL);
INSERT INTO employee (first_name,last_name,role_id,manager_id) VALUES ('Bob', 'Smith', 2, 1);
INSERT INTO employee (first_name,last_name,role_id,manager_id) VALUES ('Maggie', 'Smith', 3, 1);
INSERT INTO employee (first_name,last_name,role_id,manager_id) VALUES ('Rihanna', 'Riri', 4, 1);
INSERT INTO employee (first_name,last_name,role_id,manager_id) VALUES ('Gale', 'Gingrich', 5, 1);





