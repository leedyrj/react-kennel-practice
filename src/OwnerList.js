import React, { Component } from "react"
import Owner from "./Owner.js"

export default class OwnerList extends Component {
    state = {
        owners: []
    }

    componentDidMount() {
        fetch("http://localhost:5002/owners")
            .then(e => e.json())
            .then(owners => this.setState({ owners: owners }))
    }

    checkOutOwner = (ownerId) => {
        fetch(`http://localhost:5002/owners/${ownerId}`, {
            method: "DELETE"
        })
            .then(() => {
                return fetch("http://localhost:5002/owners")
            })
            .then(a => a.json())
            .then(ownerList => {
                this.setState({
                    owners: ownerList
                })
            })
    }
    render() {
        return (
            <React.Fragment>
                {
                    this.state.owners.map(owner =>
                        <Owner key={owner.id} owner={owner} checkOutOwner={this.checkOutOwner}>
                            {owner.name}
                        </Owner>
                    )
                }
            </React.Fragment>
        )
    }
}
