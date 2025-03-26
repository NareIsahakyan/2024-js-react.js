import { patientTableType } from "../types";

const defoultState = { id: "id", doctor: "Doctor", date: " date", time: " time", complaints: " complaints", treatment: "treatment", research: "research", rezults: " rezults" }

export function patientTableReducer(state = defoultState, action) {
    switch (action.type) {
        case patientTableType.ADD:
            return [state,
                {
                    id: action.table.id,
                    doctor: action.table.doctor,
                    date: action.table.date,
                    time: action.table.time,
                    complaints: action.table.complaints,
                    treatment: action.table.treatment,
                    research: action.table.research,
                    rezults: action.table.rezults
                }
            ]

        case patientTableType.DELETE:
            return {

            };

        case patientTableType.EDIT:
            return {

            };

        case patientTableType.UPDATE:
            return [state,
                {
                    id: action.table.id,
                    doctor: action.table.doctor,
                    date: action.table.date,
                    time: action.table.time,
                    complaints: action.table.complaints,
                    treatment: action.table.treatment,
                    research: action.table.research,
                    rezults: action.table.rezults
                }
            ];
        default:
            return state;
    }

}
