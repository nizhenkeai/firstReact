/**
 * Created by m on 2018/7/12.
 */
import React from 'react';

class Dome2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {num: 0};
    }

    handleClick = () => {
        this.setState(data => ({
            num: data.num + 1
        }));
    };

    render() {
        return (<button onClick={this.handleClick}>你点我我数数 num={this.state.num}</button>);
    }
}

export default Dome2