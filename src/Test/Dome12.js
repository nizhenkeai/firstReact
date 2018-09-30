/**
 * Created by m on 2018/9/30.
 */
import React from 'react';
import Dome11 from './Dome11';
import Alert from './alert';

class Dome12 extends React.Component {

    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.goToBuy = this.goToBuy.bind(this);
        this.showAlert = this.showAlert.bind(this);
    }

    componentDidMount() {
        this.textInput.current.focusTextInput();
    }

    goToBuy = () => {
        window.location.href = 'https://www.baidu.com'
    };

    showAlert = () => {
        this.isUnConsume.alertShow();
    };


    render() {
        let isUnConsumeView = <div><span>你是我的好朋友</span></div>
        return (
            <div>
                <Dome11 ref={this.textInput}/>
                <div onClick={this.showAlert}>显示弹出层</div>
                <Alert ref={this.unConsume} middleTextView={isUnConsumeView} buttonType='vertical' onSureClick={this.goToBuy}
                       sureButtonTitle='立即参加活动' cancelButtonTitle='取消'/>
            </div>
        );
    }

    unConsume = (node) => this.isUnConsume = node;

}

export default Dome12