import React from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import PropTypes from "prop-types"


const Employee = ({ employee, children, checkOutEmployee }) => {
    //let employee = {}

    // if (props.hasOwnProperty("employee")) {
    //     employee = props.employee
    // } else {
    //     employee = props.location.state.employee
    // }

    return (
        <div className="card" style={{ width: `18rem` }}>
            <div className="card-body">
                <h5 className="card-title">
                    {children}
                </h5>
                {
                    <Link className="card-link"
                        to={{
                            pathname: `/employees/${employee.id}`,
                            state: { employee: employee }
                        }}>
                        Details
                    </Link>
                }
                <a href="#" onClick={() => checkOutEmployee(employee.id)}>Delete</a>
            </div>
        </div>
    )
}

Employee.propTypes = {
    // This rule ensures that `employee` is passed a property
    // and that is an object - not a string or number
    employee: PropTypes.object.isRequired
}

export default Employee