import React from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"


export default props => {
    let location = {}

    if (props.hasOwnProperty("location")) {
        location = props.location
    } else {
        location = props.location.state.location
    }

    return (
        <div className="card" style={{ width: `18rem` }}>
            <div className="card-body">
                <h5 className="card-title">
                    {props.children}
                </h5>
                {
                    <Link className="card-link"
                        to={{
                            pathname: `/locations/${location.id}`,
                            state: { location: location }
                        }}>
                        Details
                </Link>
                }
                <a href="#" onClick={() => props.checkOutLocation(props.location.id)}>Delete</a>
            </div>
        </div>
    )
}