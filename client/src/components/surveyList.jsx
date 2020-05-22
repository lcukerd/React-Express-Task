import React, { Component } from 'react';
import store from './../store'
import * as actions from './../actions'

class SurveyList extends Component {
    state = {
        surveys: [],
        visibleSurvey: []
    };

    fetchSurveys = async () => {
        const response = await fetch('/getSurveys', { method: 'GET' });
        const body = await response.json();
        this.setState({ surveys: body, visibleSurvey: body });
    }

    handleClick = (ele, action) => {
        const survey = ele.target.parentNode.parentNode.parentNode.parentNode.getAttribute('id');
        store.dispatch({
            type: actions.ADD_SURVEY,
            payload: {
                survey
            }
        });
    }

    showList = item => {
        return (
            <div className="list-item" key={item} id={item}>
                <div className="level is-mobile">
                    <div className="level-left">
                        <div className="level-item">
                            {item}
                        </div>
                    </div>
                    <div className="level-right">
                        <div className="level-item">
                            <button class="button is-success is-small is-light is-focused" onClick={ele => this.handleClick(ele, actions.ADD_SURVEY)}>+ Add</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount = () => {
        this.fetchSurveys();
        store.subscribe(() => {
            const storeSurvey = store.getState().surveys;
            this.setState({ visibleSurvey: this.state.surveys.filter(item => !(storeSurvey.includes(item))) });
        })
    };

    render() {
        return (
            <div>
                <div className="columns is-centered ">
                    <div className="column is-narrow">
                        <h3 className="title is-3" style={{ textAlign: "center" }}>Survey List</h3>
                        <div class="list is-hoverable" style={{ width: '20rem' }}>
                            {this.state.visibleSurvey.map(survey => this.showList(survey))}
                        </div >
                    </div>
                </div>
            </div >
        )
    }

}

export default SurveyList;