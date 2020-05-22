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
                <div className="columns">
                    <div class="column"> <Survey /></div>
                    <div class="column"> <EmployeeSurveys /></div>
                </div>
                <div style={{ display: 'flex', 'justify-content': 'center', 'align-items': 'center' }}>
                    <button className="button is-primary">Done</button>
                </div>
            </div>
        )
    }
}

export default Main;