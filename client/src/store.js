import { createStore } from 'redux';
import * as actions from './actions'

const reducer = (state = { surveys: [], employee: 'Employee 1' }, action) => {
    switch (action.type) {
        case actions.ADD_SURVEY:
            return {
                surveys: [...state.surveys, action.payload.survey],
                employee: state.employee
            };
        case actions.REMOVE_SURVEY:
            return {
                surveys: state.surveys.filter(item => item !== action.payload.survey),
                employee: state.employee
            };
        case actions.CHANGE_EMPLOYEE:
            return {
                surveys: state.surveys,
                employee: action.payload.employee
            };
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;