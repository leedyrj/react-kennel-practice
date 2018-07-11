import React, { Component } from 'react';

export default class LocationList extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>
                    Location List
                </h1>
                <div>
                    <h3>Student Kennels</h3>
                    <h4>Nashville North Location</h4>
                    <h5>500 Puppy Way</h5>
                </div>
                <div>
                    <h3>Teacher Kennels</h3>
                    <h4>Nashville South Location</h4>
                    <h5>300 Dog Drive</h5>
                </div>
                <div>
                    <h3>Professor Kennels</h3>
                    <h4>Nashville West Location</h4>
                    <h5>2500 Aminal Place</h5>
                </div>
            </React.Fragment>
        )
    }
}