import { createStore } from 'redux'

import reducers from "./reducers/index";

const store = createStore(reducers,{patients:{
    first_name:"Name",
    last_name:" Surname",
    age:"age"
}});
export default store;