import React, { Component } from "react"

export default class apiController extends Component {

    getAllEmployees = () => {
        fetch("http://localhost:5002/employees")
            .then(e => e.json())
    }

}