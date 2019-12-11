const coursesurl = 'http://localhost:8900/courses';
const enquiriesurl = 'http://localhost:8900/enquiries';

export function courselist(){
  const output = fetch(`${coursesurl}`,{
    method:'GET'
  }).then((response) => response.json())
    return{
        'type':'GET_COURSE_LIST',
        'payload': output
    }
}
export function userenquiries(){
  const output = fetch(`${enquiriesurl}`,{
    method:'GET'
  }).then((response) => response.json())
    return{
        'type':'GET_ENQUIRY_LIST',
        'payload': output
    }
}