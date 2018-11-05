/**
 * Created by m on 2018/11/5.
 */
import React from 'react';

class Dome13 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data: ''};
    }

    componentDidMount() {
        this.setTime();
        this.interval = setInterval(this.setTime, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    setTime = () => {
        const date = new Date();
        const seperator1 = "-";
        const seperator2 = ":";
        let month = date.getMonth() + 1;
        let strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        const currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + date.getHours() + seperator2 + date.getMinutes()
            + seperator2 + date.getSeconds();
        this.setState({
            data: currentdate
        });
    };


    render() {
        return (
            <div>
                <div>现在的时间是:{this.state.data}</div>
            </div>
        );
    }


}

export default Dome13