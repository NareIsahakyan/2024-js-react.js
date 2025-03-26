import { combineReducers } from 'redux';
import { patientsReducer } from './patientsReducer';
import { doctorsReducer } from './doctorsReducer';
import {patientTableReducer} from './patientTableReducer';

const reducers = combineReducers(
    {
        patients: patientsReducer,
        doctors: doctorsReducer,
        table:patientTableReducer
    }
);

export default reducers;

