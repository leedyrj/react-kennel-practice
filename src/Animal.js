import React from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import PropTypes from "prop-types"


const Animal = ({ animal, children, checkOutAnimal }) => {
    // let animal = {}

    // if (props.hasOwnProperty("animal")) {
    //     animal = props.animal
    // } else {
    //     animal = props.location.state.animal
    // }

    return (
        <div className="card" style={{ width: `18rem` }}>
            <div className="card-body">
                <h5 className="card-title">
                    {animal.name}
                </h5>
                <p className="card-text">{animal.breed}</p>
                {
                    <Link className="card-link"
                        to={{
                            pathname: `/animals/${animal.id}`,
                            state: { animal: animal }
                        }}>
                        Details
                    </Link>
                }
                <a href="#" onClick={() => checkOutAnimal(animal.id)}>Delete</a>
            </div>
        </div>
    )
}

Animal.propTypes = {
    animal: PropTypes.object.isRequired
}

export default Animal