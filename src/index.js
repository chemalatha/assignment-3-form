import React from 'react';
import ReactDOM from 'react-dom';
import Routing from './components/routing';
import {Provider} from 'react-redux';
import Store from './store';


ReactDOM.render(
<Provider store={Store}>
    <Routing />
</Provider>
,document.getElementById('root'));

