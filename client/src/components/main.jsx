import React, { Component } from 'react';
import Employee from './employeeList';
import Survey from './surveyList';
import EmployeeSurveys from './employeeSurveys';
import store from './../store'

class Main extends Component {
    state = {
        notify: undefined
    }
    postEmployeeSurvey = async () => {
        const state = store.getState();
        const body = {
            surveys: state.surveys,
            employee: state.employee
        };
        const request = await fetch('/putSurvey', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        this.setState({ notify: `Request reponded with ${request.status}` });
    }

    showNotification = () => {
        if (this.state.notify) {
            return (
                <div class="notification">
                    <button class="delete" onClick={() => this.setState({ notify: undefined })}></button>
                    {this.state.notify}
                </div>
            )
        }
    }

    render() {
        return (
            <div className="container is-fluid">
                <Employee />
                <div className="columns">
                    <div class="column"> <Survey /></div>
                    <div class="column"> <EmployeeSurveys /></div>
                </div>
                <div style={{ display: 'flex', 'justify-content': 'center', 'align-items': 'center' }}>
                    <button className="button is-primary" onClick={this.postEmployeeSurvey}>Done</button>
                </div>
                {this.showNotification()}
            </div>
        )
    }
}

export default Main;