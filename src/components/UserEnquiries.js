import React, { Component } from 'react';
const url = 'http://localhost:8900/enquiries';


class userEnquiries extends Component{
    constructor(){
        super();
        this.state = {
            enquiryData:[]
        }
    }
    componentDidMount(){
        fetch(url,{method:'GET'})
                .then((res)=>res.json())
                .then((data)=>{
                    this.setState({enquiryData:data});
                })
    }
    render(){
        const enquiries = this.state.enquiryData.map((item)=>{
            return (
                <div className="jumbotron">
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
        return(
            <div>
                {enquiries}
            </div>
        )
    }

}

export default userEnquiries;