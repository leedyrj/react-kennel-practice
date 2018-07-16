import React from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"


export default props => {
    let owner = {}

    if (props.hasOwnProperty("owner")) {
        owner = props.owner
    } else {
        owner = props.location.state.owner
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
                            pathname: `/owners/${owner.id}`,
                            state: { owner: owner }
                        }}>
                        Details
                </Link>
                }
                <a href="#" onClick={() => props.checkOutOwner(props.owner.id)}>Delete</a>
            </div>
        </div>
    )
}