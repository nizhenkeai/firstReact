/**
 * Created by m on 2018/7/27.
 */
import React, {Component} from 'react'
import './Dome8.css';

class Father extends Component {
    componentWillMount() {
        const data = this.props.location.query;
        console.log(this.props);
        console.log(data);
    }

    constructor(props) {
        super(props);
        this.state = {isShowChild: false, chooseEle: ''};

    }

    chickFather = () => {
        this.setState({
            isShowChild: !this.state.isShowChild
        });
    };
    bindFatherEvent1 = data => {
        this.setState({
            isShowChild: data
        });
    };

    bindFatherEvent2 = data => {
        this.setState({
            chooseEle: Number(data) + 1
        });
    };

    render() {
        return (
            <div>
                <button onClick={this.chickFather}>我是父组件</button>
                <Child isShow={this.state.isShowChild} bindFatherEvent1={this.bindFatherEvent1.bind(this)}
                       bindFatherEvent2={this.bindFatherEvent2.bind(this)}/>
                <div className={this.state.chooseEle ? 'show' : 'hidden'}>子组件选择了第{this.state.chooseEle}个</div>
            </div>
        );
    }
}


class Child extends Component {

    // componentWillReceiveProps(nextProps){
    //     if(!is(fromJS(this.props.proData), fromJS(nextProps.proData))){
    //         this.initData(nextProps);
    //     }
    // }
    // shouldComponentUpdate(nextProps, nextState){
    //     return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState))
    // }
    constructor(props) {
        super(props);
        this.state = {list: [{a: '第一'}, {a: '第二'}, {a: '第三'}, {a: '第四'}]};
    }

    bindEvent1 = () => {
        this.props.bindFatherEvent1(false);
    };

    bindEvent2 = event => {
        this.props.bindFatherEvent2(event.target.getAttribute('data-num'));
        this.props.bindFatherEvent1(false);
    };

    render() {
        const {props} = this;
        if (!props.isShow) {
            return null;
        }
        return (
            <div className="bg-red">
                <p>终于显示我了</p>
                <button onClick={this.bindEvent1}>你关了我吧，我不选</button>
                <ul>
                    {this.state.list.map((item, index) => {
                        return <li data-num={index} key={index} onClick={this.bindEvent2}>选我，我{item.a}</li>
                    })}
                </ul>
            </div>
        );
    }
}

export default Father

 