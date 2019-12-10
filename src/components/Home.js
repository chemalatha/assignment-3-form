import React,{Component} from 'react';
import EnquiryView from './EnquiryView';

const url = 'http://localhost:8900/courses';

class userEnquiries extends Component{
    constructor(){
        super();
        this.state = {
            enquiries:[]
        }
    }
    componentDidMount(){
        fetch(url,{method:'GET'})
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                this.setState({
                    enquiries:data
                }  
                )
            })
    }
    render(){
        return(
            <div className="panel panel-primary">
                <div className="panel-heading">Forms Header</div>
                <div className="panel-body">
                    <div className="jumbotron">
                        <EnquiryView topicdata={this.state.enquiries} />
                    </div>
                </div>
            </div>
        )
    }
}

export default userEnquiries;