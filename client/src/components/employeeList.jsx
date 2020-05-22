import React, { Component } from 'react';
import store from './../store'
import * as actions from './../actions'

class EmployeeList extends Component {

    state = {
        selectEmployee: '',
        employees: []
    }

    selectEmployee = () => {
        console.log(`Selected ${this.state.employees[this.dropDown.selectedIndex]}`)
        const selectedEmployee = this.state.employees[this.dropDown.selectedIndex];
        this.setState({ selectEmployee: selectedEmployee });
        store.dispatch({
            type: actions.CHANGE_EMPLOYEE,
            payload: {
                employee: selectedEmployee
            }
        })
    }

    fetchEmployees = async () => {
        const response = await fetch('/getEmployees', { method: 'GET' });
        const body = await response.json();
        this.setState({ selectEmployee: body[0], employees: body });
    }

    toggleDropdown = event => {
        event.preventDefault();
        event.stopPropagation();
        this.dropdown.classList.toggle('is-active');
    };

    componentDidMount = () => this.fetchEmployees();

    render() {
        return (
            <div >
                <h3 className="title is-3" style={{ textAlign: "center" }}>Select Employee</h3>
                <div style={{ display: 'flex', 'justify-content': 'center', 'align-items': 'center' }}>
                    <div className="select">
                        <select ref={dropDown => this.dropDown = dropDown} onChange={this.selectEmployee}>
                            {this.state.employees.map(employee => <option key={employee} >{employee}</option>)}
                        </select>
                    </div>
                </div>
            </div >
        )
    }

}

export default EmployeeList;