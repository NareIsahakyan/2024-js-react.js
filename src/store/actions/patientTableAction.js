import { patientTableType } from "../types"

export function add(id, doctor, date, time, complaints, treatment, research, rezults) {
    return {
        type: patientTableType.ADD,
        table: {
            id, 
            doctor, 
            date, 
            time, 
            complaints, 
            treatment,
             research, 
             rezults
        }
    }
}

export function update(id, doctor, date, time, complaints, treatment, research, rezults) {
    return {
        type:patientTableType.UPDATE,
        table: {
            id, 
            doctor, 
            date, 
            time, 
            complaints, 
            treatment,
             research, 
             rezults
        }
    }
}

export function deleteLine(id) {
    return {
        type:patientTableType.DELETE,
        table: {
           
        }
    }
}