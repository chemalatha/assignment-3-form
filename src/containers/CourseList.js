import React from 'react';
import EnquiryView from '../components/EnquiryView';


const CourseList = (props)=>{
        return(
            <div  className="panel panel-primary">
                <div className="panel-heading">Forms Header</div>
                <div className="panel-body">
                    <div className="jumbotron">
                        <EnquiryView topicdata={props.courses} />
                    </div>
                </div>
            </div>
        )
}

export default CourseList;