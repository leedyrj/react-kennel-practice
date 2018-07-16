import React, { Component } from "react"
import Owner from "./Owner.js"
import apiController from "./apiController.js";

export default class OwnerList extends Component {
    state = {
        owners: []
    }

    componentDidMount() {
        apiController.getAllOwners()
            .then(owners => this.setState({
                owners: owners
            }))
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
                    <ul>
                        {
                            this.state.owners.map(owner => <Owner key={owner.id} owner={owner} checkOutOwner={this.checkOutOwner}>
                                {owner.name}
                            </Owner>
                            )
                        }
                    </ul>
                }
            </React.Fragment>
        )
    }
}
