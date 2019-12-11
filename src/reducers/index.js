import {combineReducers} from 'redux';
import courses from  './course_reducer';
import enquiries from  './enquiries_reducer';


const rootReducer = combineReducers({
    courses,enquiries
});

export default rootReducer;