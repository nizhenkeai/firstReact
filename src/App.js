import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Dome1 from './Test/Dome1';
import Dome2 from './Test/Dome2';
import Dome3 from './Test/Dome3';
import Dome4 from './Test/Dome4';
import Dome5 from './Test/Dome5';
import Dome6 from './Test/Dome6';
import Dome7 from './Test/Dome7';
import Dome8 from './Test/Dome8';
import Father from './Test/Dome9';
import Dome10 from './Test/Dome10';
import Dome12 from './Test/Dome12';
import {BrowserRouter, Route, NavLink, Link} from 'react-router-dom'

class App extends Component {

    render() {
        const data = {id: 3, name: '朱燕妮', age: 24};
        const path = {
            pathname: '/Father',
            query: data,
        };
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <Dome12 />

                <BrowserRouter>

                    <div>
                        <div>
                            <Link to='/'>all</Link> <br/>
                            {/*<NavLink to='Father'>Father</NavLink>*/}
                            <Link to={path}>Father</Link>
                        </div>

                        <Route exact path="/" component={Dome3}/>
                        <Route path="/Dome2" component={Dome2}/>
                        <Route path="/Father" component={Father}/>

                    </div>
                    {/* <Dome1 name="朱燕妮"/>
                     <Dome2 />
                     <Dome3 />
                     <Dome4 />
                     <Dome5 />
                     <Dome6 />
                     <Dome7 />
                     <Dome8 />
                     <Dome10 />*/}
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
