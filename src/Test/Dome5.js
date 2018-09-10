/**
 * Created by m on 2018/7/13.
 */
import React from 'react';


class Dome5 extends React.Component {


    constructor(props) {
        super(props);
        this.state = {inputV: ''};
        this.changInp = this.changInp.bind(this);
        this.submitInp = this.submitInp.bind(this);
    }

    changInp = event => {
        this.setState({
            inputV: event.target.value
        });
    };
    submitInp = event => {
        console.log(event.target.value);
    };


    render() {
        return (
            <form onSubmit={this.submitInp}>
                <input type="text" value={this.state.inputV} onChange={this.changInp}/>
                <input type="submit" value='submit'/>
                <div>表单内容：{this.state.inputV}</div>
            </form>
        );
    }
}

export default Dome5