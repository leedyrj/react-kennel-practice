import React, { Component } from 'react';

export default class OwnerList extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.owners.map(owner =>
                        <div>
                            {owner.name}
                        </div>
                    )
                }
            </React.Fragment>
        )
    }
}