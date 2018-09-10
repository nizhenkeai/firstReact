import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Father from './Test/Dome9';
import Dome2 from './Test/Dome2';

import registerServiceWorker from './registerServiceWorker';
/*import {BrowserRouter, Route, NavLink, Link} from 'react-router-dom'

const data = {id: 3, name: '朱燕妮', age: 24};
const path = {
    pathname: '/Father',
    query: data,
};

<BrowserRouter>
    <div>
        <div>
            <Link to='/'>all</Link>
            <NavLink to='Father'>Father</NavLink>
            <Link to={path}>Father</Link>
        </div>

        <Route exact path="/" component={App}/>
        <Route path="/Dome2" component={Dome2}/>
        <Route path="/Father" component={Father}/>
    </div>
</BrowserRouter>*/
ReactDOM.render(<App/>, document.getElementById('root')
)
;
registerServiceWorker();
