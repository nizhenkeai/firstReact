/**
 * Created by m on 2018/7/12.
 */
import React from 'react';

let WarningBanner = props => {
    if (!props.warn) {
        return null;
    }
    return (
        <div className="App-alert">警告，快关闭电脑，不许加班不许熬夜</div>
    )
};


class Dome3 extends React.Component {


    constructor(props) {
        super(props);
        this.state = {isTrue: true};
        this.handToggleClick = this.handToggleClick.bind(this);
    }


    handToggleClick = () => {
        this.setState(data => ({
            isTrue: !data.isTrue
        }));
    };


    render() {
        return (
            <div>
                <WarningBanner warn={this.state.isTrue}/>
                <button onClick={this.handToggleClick}>{this.state.isTrue ? '关闭警告' : '显示警告'}</button>
            </div>
        );
    };
}

export default Dome3