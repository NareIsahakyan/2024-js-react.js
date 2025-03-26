import { patientsTypes } from "../types";

const defoultState = {
        first_name: "Name",
        last_name: " Surname",
        age: "age"
}

export function patientsReducer(state = defoultState, action) {
    switch (action.type) {
        case patientsTypes.GET_ME:
            return {
                first_name: action.patient.first_name,
                last_name: action.patient.last_name,
                age:  action.patient.age 
            }
    
        case patientsTypes.UPDATE_ME:
    return {
            first_name: action.patient.first_name,
            last_name: action.patient.last_name,
            age: action.patient.age
    };
        default:
    return state;
}

}