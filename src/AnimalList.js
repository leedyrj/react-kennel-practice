import React, { Component } from "react"
import Animal from "./Animal"

console.log("import animal", Animal)


export default class AnimalList extends Component {
    state = {
        animals: []
    }

    componentDidMount() {
        fetch("http://localhost:5002/animals")
            .then(e => e.json())
            .then(animals => this.setState({ animals: animals }))
    }

    checkOutAnimal = (animalId) => {
        //Delete the specified animal from the API
        fetch(`http://localhost:5002/animals/${animalId}`, {
            method: "DELETE"
        })
            //when delete is finished, retrieve the new list of animals
            .then(() => {
                //you HAVE to return this fetch to the subsequent .then()
                return fetch("http://localhost:5002/animals")
            })
            .then(a => a.json())
            .then(animalList => {
                this.setState({
                    animals: animalList
                })
            })
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.state.animals.map(animal =>
                        <Animal key={animal.id}
                            animal={animal}
                            checkOutAnimal={this.checkOutAnimal}
                        />
                    )
                }
            </React.Fragment>
        )
    }
}
