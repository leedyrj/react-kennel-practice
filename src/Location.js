import React from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import PropTypes from "prop-types"


const Location = ({ location, children, checkOutLocation }) => {
    // let location = {}

    // if (props.hasOwnProperty("location")) {
    //     location = props.location
    // } else {
    //     location = props.location.state.location
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
                            pathname: `/locations/${location.id}`,
                            state: { location: location }
                        }}>
                        Details
                </Link>
                }
                <a href="#" onClick={() => checkOutLocation(location.id)}>Delete</a>
            </div>
        </div>
    )
}

Location.propTypes = {
    // This rule ensures that `employee` is passed a property
    // and that is an object - not a string or number
    location: PropTypes.object.isRequired
}

export default Location