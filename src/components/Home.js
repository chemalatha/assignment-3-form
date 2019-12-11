import React , {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import CourseList from '../containers/CourseList';

class Home extends Component{

    componentDidMount(){
        this.props.courselist();
    }
    render(){
        return(
            <div>
                <CourseList courses={this.props.courses} />
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        courses:state.courses
    }
}
export default connect(mapStateToProps,actions)(Home);