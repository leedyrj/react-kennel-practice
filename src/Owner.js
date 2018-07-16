import React from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import PropTypes from "prop-types"

const Owner = ({ owner, children, checkOutOwner }) => {
    // let owner = {}

    // if (hasOwnProperty("owner")) {
    //     owner = owner
    // } else {
    //     owner = location.state.owner
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
                            pathname: `/owners/${owner.id}`,
                            state: { owner: owner }
                        }}>
                        Details
                </Link>
                }
                <a href="#" onClick={() => checkOutOwner(owner.id)}>Delete</a>
            </div>
        </div>
    )
}

export default Owner