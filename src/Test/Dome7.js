/**
 * Created by m on 2018/7/25.
 */
import React from 'react';


class Dome7 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isChecked: false};
    }


    change = event => {
        this.setState({
            isChecked: event.target.checked
        });
    };

    render() {
        return (
            <div>
                <input type="checkbox" name="check" checked={this.state.isChecked} onChange={this.change}/>
                <div>{this.state.isChecked ? '选中了好开心' : '没选中伤心了'}</div>
            </div>
        );
    }
}

export default Dome7


