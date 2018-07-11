import React, { Component } from 'react';

export default class AnimalList extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.animals.map(animal =>
                        <div>
                            {animal.name}
                        </div>
                    )
                }
            </React.Fragment>
        )
    }
}

// Your task is to update the AnimalList component to also display the name of the animal's owner. You'll need to pass multiple collections - not just animals - to the component in order to accomplish this.