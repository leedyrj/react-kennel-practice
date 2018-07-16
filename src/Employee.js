import React from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"


export default props => {
    let employee = {}

    if (props.hasOwnProperty("employee")) {
        employee = props.employee
    } else {
        employee = props.location.state.employee
    }

    return (
        <div className="card" style={{ width: `18rem` }}>
            <div className="card-body">
                <h5 className="card-title">
                    {props.employee.name}
                </h5>
                {
                    <Link className="card-link"
                        to={{
                            pathname: `/employees/${props.employee.id}`,
                            state: { employee: props.employee }
                        }}>
                        Details
                    </Link>
                }
                <a href="#" onClick={() => props.checkOutEmployee(props.employee.id)}>Delete</a>
            </div>
        </div>
    )
}