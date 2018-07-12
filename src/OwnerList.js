import React, { Component } from "react"


export default class OwnerList extends Component {
    state = {
        owners: [
            { id: 1, name: "Ryan Tanay" },
            { id: 2, name: "Emma Beaton" },
            { id: 3, name: "Dani Adkins" },
            { id: 4, name: "Adam Oswalt" },
            { id: 5, name: "Fletcher Bangs" },
            { id: 6, name: "Angela Lee" }
        ]
    }

    render() {
        return (
            <React.Fragment>
                <ul>
                    {
                        this.state.owners.map(owner =>
                            <li key={owner.id}>{owner.name}</li>)
                    }
                </ul>
            </React.Fragment>
        )
    }
}