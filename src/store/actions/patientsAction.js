import { patientsTypes } from "../types";

export function gettingMe(first_name, last_name, age) {
    return {
        type: patientsTypes.GET_ME,
        patient: {
            id:Math.random(),
            first_name,
            last_name,
            age
        }
    }
}

export function updateMe(first_name, last_name,age) {
    return {
        type: patientsTypes.UPDATE_ME,
        patient: {
            first_name,
            last_name,
            age
        }
    }
}