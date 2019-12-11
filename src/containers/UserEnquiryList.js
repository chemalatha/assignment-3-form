import React  from 'react';

const UserEnquiryList = (props) => {
    const renderList = (entries) => {
        if(entries){
            return entries.map((item) =>  {
                return(
                <div key={item.id} className="jumbotron">
                    <div className="form-group">
                    <label>Name:</label><span>{item.name}</span>
                    </div>
                    <div className="form-group">
                    <label>PhoneNumber:</label><span>{item.phone}</span>
                    </div>
                    <div className="form-group">
                    <label>Email:</label><span>{item.email}</span>
                    </div>
                    <div className="form-group">
                    <label>Course Enquiried about:</label><span>{item.course}</span>
                    </div>
                    <div className="form-group">
                    <label>Additional Details:</label><span>{item.comments}</span>
                    </div>

                </div>
                )
            })
        }
    }
        return(
            <div>
                {renderList(props.userEnquiries)}    
            </div>
            
        )
}


export default UserEnquiryList;

