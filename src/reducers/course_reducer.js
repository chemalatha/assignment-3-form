export default function(state=null,action){
    switch(action.type){
        case 'GET_COURSE_LIST':
            return action.payload;
        default:
            return state;
    }
}