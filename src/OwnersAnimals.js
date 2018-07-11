import React, { Component } from 'react';

export default class OwnersAnimalsList extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.ownersAnimals.map(ownerAnimal =>
                        <div>
                            {ownerAnimal.name}
                        </div>
                    )
                }
            </React.Fragment>
        )
    }
}