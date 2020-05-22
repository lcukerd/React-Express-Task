import React, { Component } from 'react';
import store from './../store'
const fetch = require("node-fetch");

class EmployeeList extends Component {

    state = {
        selectEmployee: '',
        employees: []
    }

    selectEmployee = () => {
        console.log(`Selected ${this.state.employees[this.dropDown.selectedIndex]}`)
        this.setState({ selectEmployee: this.state.employees[this.dropDown.selectedIndex] })
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
                        <select ref={dropDown => this.dropDown = dropDown} onChange={() => console.log(this.state.employees[this.dropDown.selectedIndex])}>
                            {this.state.employees.map(employee => <option key={employee} >{employee}</option>)}
                        </select>
                    </div>
                </div>
            </div >
        )
    }

}

export default EmployeeList;