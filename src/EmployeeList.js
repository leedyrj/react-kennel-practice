import React, { Component } from "react"
import Employee from "./Employee"
import apiController from "./apiController"

console.log(apiController)
export default class EmployeeList extends Component {
    state = {
        employees: []
    }

    componentDidMount() {
        apiController.getAllEmployees()
            .then(employees => this.setState({
                employees: employees
            }))
    }

    checkOutEmployee = (employeeId) => {
        // Delete the specified employee from the API
        fetch(`http://localhost:5002/employees/${employeeId}`, {
            method: "DELETE"
        })
            // When DELETE is finished, retrieve the new list of employees
            .then(() => {
                // Remember you HAVE TO return this fetch to the subsequenet `then()`
                return fetch("http://localhost:5002/employees")
            })
            // Once the new array of employees is retrieved, set the state
            .then(a => a.json())
            .then(employeeList => {
                this.setState({
                    employees: employeeList
                })
            })
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.state.employees.map(employee =>
                        <Employee key={employee.id}
                            employee={employee}
                            checkOutEmployee={this.checkOutEmployee}
                        />
                    )
                }
            </React.Fragment>
        )
    }
}
