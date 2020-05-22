import React, { Component } from 'react';
import store from './../store'

class SurveyList extends Component {
    state = {
        surveys: []
    }

    fetchSurveys = async () => {
        const response = await fetch('/getSurveys', { method: 'GET' });
        const body = await response.json();
        this.setState({ surveys: body });
    }

    componentDidMount = () => this.fetchSurveys();

    render() {
        return (
            <div>
                <h3 className="title is-3" style={{ textAlign: "center" }}>Survey List</h3>
                <div class="list is-hoverable">
                    {this.state.surveys.map(survey => <div class="list-item">{survey} <button class="button is-success is-small is-light is-focused">+ Add</button></div>)}
                </div >
            </div>
        )
    }

}

export default SurveyList;