INSERT INTO department (name)
VALUES
  ('Sales'),
  ('Client Services'),
  ('Engineering'),
  ('Product'),
  ('Accounting'),
  ('Account Management');

INSERT INTO role (title, salary, department_id)
VALUES
  ('Salesperson', 40000, 1),
  ('Software Engineer', 120000, 3),
  ('Accountant',  75000, 5),
  ('Product Manager', 100000, 4),
  ('Client Services Specialist', 45000, 2),
  ('Lead Engineer', 150000, 3),
  ('Account Manager', 75000, 6);


INSERT INTO employee (first_name, last_name, role_id)
VALUES
  ('James', 'Fraser', 1),
  ('Jack', 'London', 1),
  ('Robert', 'Bruce', 3),
  ('Peter', 'Greenaway', 5),
  ('Derek', 'Jarman', 5),
  ('Paolo', 'Pasolini', 2),
  ('Aubrey', 'Beardsley', 3),
  ('Tulse', 'Luper', 6),
  ('William', 'Morris', 4),
  ('George', 'Shaw', 7);