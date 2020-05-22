import React, { Component } from 'react';
import store from './../store'
import * as actions from './../actions'

class EmployeeSurveys extends Component {
    state = {
        surveys: []
    }

    handleClick = (ele, action) => {
        const survey = ele.target.parentNode.parentNode.parentNode.parentNode.getAttribute('id');
        store.dispatch({
            type: action,
            payload: {
                survey
            }
        });
    }

    showList = item => {
        // Disbaled the add button because that seems like a mistake in requested UI
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
                            <button class="button is-success is-small is-light is-focused" onClick={ele => this.handleClick(ele, actions.ADD_SURVEY)} disabled>+ Add</button>
                        </div>
                        <div className="level-item">
                            <button class="button is-danger is-small is-light is-focused" onClick={ele => this.handleClick(ele, actions.REMOVE_SURVEY)} > - Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount = () => {
        store.subscribe(() => {
            this.setState({ surveys: store.getState().surveys });
        });
    }

    render() {
        return (
            <div className="columns is-centered ">
                <div className="column is-narrow">
                    <h3 className="title is-3" style={{ textAlign: "center" }}>Assigned Surveys</h3>
                    <div class="list is-hoverable" style={{ width: '20rem' }}>
                        {this.state.surveys.map(survey => this.showList(survey))}
                    </div >
                </div>
            </div>
        )
    }
}

export default EmployeeSurveys;