/**
 * Created by m on 2018/7/23.
 */
import React from 'react';


class Dome6 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selectName: '励志', options: ['励志', '优秀', '完美', '好看']};
    }

    change = event => {
        this.setState({selectName: event.target.value});
    };

    render() {
        const state = this.state.options;
        const optionList = state.map((item, index) => (
            <option value={item} key={index}>{item}</option>
        ));
        return (
            <div>
                <select name="select" id="select" value={this.state.selectName} onChange={this.change}>
                    {optionList}
                </select>
                <div>我的优点是{this.state.selectName}</div>
            </div>
        )
    }
}

export default Dome6