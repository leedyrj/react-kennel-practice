import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './AnimalList'
import LocationList from './LocationList'
import EmployeeList from './EmployeeList'
import OwnerList from './OwnerList';
import Animal from './Animal'
import Owner from "./Owner"
import Employee from "./Employee"
import Location from "./Location"
import Login from "./Login"



export default class ApplicationViews extends Component {

    isAuthenticated = () => localStorage.getItem("credentials") !== null || sessionStorage.getItem("credentials") !== null

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={props => {
                    if (this.isAuthenticated()) {
                        return <LocationList />
                    } else {
                        return <Login />
                    }
                }} />
                <Route path="/locations/:locationId" render={(props) => {
                    return <Location location={props.location.state.location}> {props.location.state.location.name}
                    </Location>
                }} />
                <Route path="/animals" render={props => {
                    if (this.isAuthenticated()) {
                        return <AnimalList />
                    } else {
                        return <Login />
                    }
                }} />
                <Route path="/animals/:animalId" render={(props) => {
                    return <Animal animal={props.location.state.animal}> {props.location.state.animal.name}
                    </Animal>
                }} />
                <Route exact path="/employees" render={props => {
                    if (this.isAuthenticated()) {
                        return <EmployeeList />
                    } else {
                        return <Login />
                    }
                }} />
                <Route path="/employees/:employeeId" render={(props) => {
                    return <Employee employee={props.location.state.employee}>
                        {props.location.state.employee.name}
                    </Employee>
                }} />
                <Route exact path="/owners" render={props => {
                    if (this.isAuthenticated()) {
                        return <OwnerList />
                    } else {
                        return <Login />
                    }
                }} />
                <Route path="/owners/:ownerId" render={(props) => {
                    return <Owner owner={props.location.state.owner}> {props.location.state.owner.name}
                    </Owner>
                }} />
                <Route path="/login" component={Login} />
            </React.Fragment>
        )
    }
}