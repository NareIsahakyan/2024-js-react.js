import { patientsTypes } from "../types";

export function patientsReducer(state = {}, action) {
    switch (action.type) {
        case patientsTypes.GET_ME:
            return {
                first_name:action.patient.first_name,
                last_name:action.patient.last_name,
                age:action.patient.age,
            }
        case patientsTypes.UPDATE_ME:
            return [
                state = state.filter(patient => patient.id !== action.id),
                {first_name:action.patient.first_name,
                last_name:action.patient.last_name,
                age:action.patient.age}
            ];
        default:
            return state;
    }
}