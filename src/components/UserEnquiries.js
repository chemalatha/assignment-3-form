import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import UserEnquiryList from '../containers/UserEnquiryList';



class userEnquiries extends Component{

    componentDidMount(){
        this.props.userenquiries();
    }
    render(){
        return(
            <div>
                <UserEnquiryList userEnquiries={this.props.enquiries} />
            </div>
        )
    }

}
function mapStateToProps(state){
    return{
        enquiries:state.enquiries
    }
}
export default connect(mapStateToProps,actions)(userEnquiries);