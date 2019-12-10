import React from 'react';
import {Link} from 'react-router-dom';

const enquiryView = (props)=>{
    const renderResponse = ({topicdata})=>{
        if(topicdata){
            return topicdata.map((item) => {
                return(
                    <div key={item.id}>
                        <h3>{item.name}</h3>
                        <div className="btn btn-success">
                            <Link to="/enquiryform">Enquiry</Link>
                        </div>
                    </div>
                )
            })
        }
    }
    return(
        <div>
            {renderResponse(props)}
        </div>
        
    )
}

export default enquiryView;