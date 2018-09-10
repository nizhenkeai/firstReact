/**
 * Created by m on 2018/7/25.
 */
import React from 'react';
import './Dome8.css'

class Dome8 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {'inputV': ''};
        this.change = this.change.bind(this);
    }

    click = event => {
        console.log(event.target.innerHTML);
    };

    change = event => {
        console.log(event.target.value);
        this.setState({
            'inputV': event.target.value
        });
    };
    render() {
        return (
            <div>
                <div className="bg-red" onClick={this.click}>王杰</div>
                <input type="text" value={this.state.inputV} onChange={this.change}/>
            </div>
        );
    }
}

export default Dome8