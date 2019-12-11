export default function(state=null,action){
    switch(action.type){
        case 'GET_ENQUIRY_LIST':
            return action.payload;
        default:
            return state;
    }
}