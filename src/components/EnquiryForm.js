import React,{Component} from 'react';

const url = 'http://localhost:8900/enquiries';

class enquiryForm extends Component {
    constructor(){
        super();
        this.state = {
            name:'',
            phone:'',
            email:'',
            course:'',
            comments:''
        }
    }

    handleNameChange(event){
        this.setState({name:event.target.value});
    }
    handlePhoneChange(event){
        this.setState({phone:event.target.value});
    }
    handleEmailChange(event){
        this.setState({email:event.target.value});
    }
    handleCourseChange(event){
        this.setState({course:event.target.value});
    }
    handleCommentsChange(event){
        this.setState({comments:event.target.value});
    }
    handleSubmit(event){
        event.preventDefault();
        let enquiryData = {
            id:Math.floor(Math.random()*1000),
            name:this.state.name,
            phone:this.state.phone,
            email:this.state.email,
            course:this.state.course,
            comments:this.state.comments

        }
        fetch(url,{method:'POST',
                    headers:{
                        'Content-Type':'application/json',
                        'Accept':'application/json'
                    },
                    body:JSON.stringify(enquiryData)
                    })
            .then(
                this.props.history.push('/userenquiries')
            )
    }
    render(){
        return(
            <div className="jumbotron">
                <h2>Enquiry Form</h2>
                <form>
                    <div className="form-group">
                        <label>Name:</label>
                        <input className="form-control" type="text"
                            placeholder="Please Enter Your Name Here"
                            onChange={this.handleNameChange.bind(this) } />
                    </div>
                    <div className="form-group">
                        <label>Phone Number:</label>
                        <input className="form-control" type="text"
                                placeholder="Please Enter Your Phone Number Here"
                                onChange={this.handlePhoneChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input className="form-control" type="email"
                                placeholder="Please Enter Your Email Here"
                                onChange={this.handleEmailChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label>Course You Would Like to Enquire Abour:</label>
                        <input className="form-control" type="text"
                                placeholder="Please Enter Your Course Name Here"
                                onChange={this.handleCourseChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label>Additional Comments:</label>
                        <textarea className="form-control" type="text"
                                placeholder="Please Enter Any Comments Here"
                                onChange={this.handleCommentsChange.bind(this)} >
                        </textarea>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-success"
                                onClick={this.handleSubmit.bind(this)}>Submit Details</button>
                    </div>
                </form>
            </div>

        )
    }
};

export default enquiryForm;