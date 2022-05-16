const inquirer = require("inquirer");
const express = require('express');
const db = require("./db/connection");
const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

function getEmployees() {
  // Get all employee information
  app.get("/api/employees", (req, res) => {
    const sql = `SELECT employees.id, employee.first_name, employee.last_name, role.title 
                  AS role_title, role.salary, department.name
                  FROM employees 
                  LEFT JOIN role 
                  ON employees.id = role.id`;

    db.query(sql, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({
        message: "success",
        data: rows,
      });
    });
  });
}

function loadEmployeeOptions() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        name: "options",
        choices: [
          "View All Employees",
          "View All Employees By Department",
          "View All Employees By Manager",
          "Add Employee",
          "Remove Employee",
          "Update Employee Role",
          "Update Employee Manager",
        ],
      },
    ])
    .then((response) => {
      switch (response.options) {
        case "View All Employees":
          getEmployees();
          break;
        case "View All Departments":
          getDepartments();
          break;
        case "View All Roles":
          getRoles();
          break;
        case "Add a Department":
          getRoles();
          break;
        case "Add a Role":
          getRoles();
          break;
        case "Add an Employee":
          addEmployee();
          break;
        case "Update Employee Role":
          updateRole();
          break;
        case "Change Employee Manager":
          updateManager();
          break;
        case "Remove An Employee":
          removeEmployee();
          break;
        case "Return To Main Menu":
          runApp();
          break;
      }
    });
}

loadEmployeeOptions();
