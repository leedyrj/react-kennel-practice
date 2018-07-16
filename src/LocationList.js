import React, { Component } from "react"
import Location from "./Location"
import apiController from "./apiController";

export default class LocationList extends Component {
    state = {
        locations: []
    }

    componentDidMount() {
        apiController.getAllLocations()
            .then(locations => this.setState({ locations: locations }))
    }

    checkOutLocation = (locationId) => {
        fetch(`http://localhost:5002/locations/${locationId}`, {
            method: "DELETE"
        })
            .then(() => {
                return fetch("http://localhost:5002/locations")
            })
            .then(a => a.json())
            .then(locationList => {
                this.setState({
                    locations: locationList
                })
            })
    }

    render() {
        return (
            <React.Fragment>
                {
                    <ul>
                        {
                            this.state.locations.map(location => <Location key={location.id} location={location} checkOutLocation={this.checkOutLocation}>
                                {location.name}
                            </Location>
                            )
                        }
                    </ul>
                }
            </React.Fragment>
        )
    }
}
