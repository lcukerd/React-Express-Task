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

    showList = item => {
        return (
            <div className="list-item">
                <div className="level is-mobile">
                    <div className="level-left">
                        <div className="level-item">
                            {item}
                        </div>
                    </div>
                    <div className="level-right">
                        <div className="level-item">
                            <button class="button is-success is-small is-light is-focused">+ Add</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount = () => this.fetchSurveys();

    render() {
        return (
            <div>
                <div className="columns is-centered ">
                    <div className="column is-narrow">
                        <h3 className="title is-3" style={{ textAlign: "center" }}>Survey List</h3>
                        <div class="list is-hoverable" style={{ width: '20rem' }}>
                            {this.state.surveys.map(survey => this.showList(survey))}
                        </div >
                    </div>
                </div>
            </div >
        )
    }

}

export default SurveyList;