import React, { Component } from 'react';
import Employee from './employeeList';
import Survey from './surveyList';
import EmployeeSurveys from './employeeSurveys';
import store from './../store'

class Main extends Component {
    render() {
        return (
            <div className="container is-fluid">
                <Employee />
                <Survey />
                <EmployeeSurveys />
                <button className="button is-primary">Done</button>
            </div>
        )
    }
}

export default Main;