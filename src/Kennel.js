import React, { Component } from "react"
import EmployeeList from "./EmployeeList"
import LocationList from "./LocationList"
import AnimalList from "./AnimalList"
import OwnerList from "./OwnerList"
import OwnersAnimals from "./OwnersAnimals"

export default class Kennel extends Component {

    state = {
        employees: [
            { id: 1, name: "Jessica Younker" },
            { id: 2, name: "Jordan Nelson" },
            { id: 3, name: "Zoe LeBlanc" },
            { id: 4, name: "Blaise Roberts" }
        ],
        locations: [
            { id: 1, name: "Nashville North" },
            { id: 2, name: "Nashville South" },
            { id: 3, name: "Nashville West" }
        ],
        animals: [
            { id: 1, name: "Doodles" },
            { id: 2, name: "Jack" },
            { id: 3, name: "Angus" },
            { id: 4, name: "Henley" },
            { id: 5, name: "Derkins" },
            { id: 6, name: "Checkers" }
        ],
        owners: [
            { id: 1, name: "Ryan Tanay" },
            { id: 2, name: "Emma Beaton" },
            { id: 3, name: "Dani Adkins" },
            { id: 4, name: "Adam Oswalt" },
            { id: 5, name: "Fletcher Bangs" },
            { id: 6, name: "Angela Lee" }
        ],
        ownersAnimals: [
            { id: 1, animalsId: 1, ownersId: 1 },
            { id: 2, animalsId: 2, ownersId: 2 },
            { id: 3, animalsId: 3, ownersId: 3 },
            { id: 4, animalsId: 4, ownersId: 4 },
            { id: 5, animalsId: 5, ownersId: 5 },
            { id: 6, animalsId: 6, ownersId: 6 }
        ]
    }

    render() {
        return (
            <React.Fragment>
                <LocationList locations={this.state.locations} />
                <EmployeeList employees={this.state.employees} />
                <AnimalList animals={this.state.animals} />
                <OwnerList owners={this.state.owners} />
                <OwnersAnimals ownersAnimals={this.state.ownersAnimals} />
            </React.Fragment>
        );
    }
}