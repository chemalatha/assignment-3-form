import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './Home';
import UserEnquiries from './UserEnquiries';
import EnquiryForm from './EnquiryForm';

const routing = () => {
    return (
        <BrowserRouter>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Edureka</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active"><Link  to="/">Home</Link></li>
                        <li><Link  to="/userenquiries">User Enquiries</Link></li>
                        <li><Link  to="/enquiryForm">Enquiry Form</Link></li>
                    </ul>
               </div>
            </nav>
            <div className="container">
                <Route exact path="/" component={Home}></Route>
                <Route path="/userenquiries" component={UserEnquiries}></Route>
                <Route path="/enquiryform" component={EnquiryForm}></Route>
            </div>
            
        </BrowserRouter>
    )
};

export default routing;