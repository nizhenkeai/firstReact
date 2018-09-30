/**
 * Created by m on 2018/9/30.
 */
import React from 'react';
import './Dome8.css';
import alertClose from '../assets/img/alertClose.png';
import alertHeader from '../assets/img/alertHeader.png';

class Alert extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: false
        }
    }

    componentDidMount() {
    }


    render() {
        const {isShow} = this.state;

        let bottomBtnView;
        switch (this.props.buttonType) {
            case 'vertical': {
                bottomBtnView =
                    <div className='alertBottomVerticalView'>
                        <button className='alertTopBtn' onClick={this.sure}>{this.props.sureButtonTitle ? this.props.sureButtonTitle : '确定'}</button>
                        <button className='alertBottomBtn'
                                onClick={this.cancel}>{this.props.cancelButtonTitle ? this.props.cancelButtonTitle : '取消'}</button>
                    </div>
                break
            }
            default: {
                bottomBtnView =
                    <button className='alertSingleBtn' onClick={this.sure}>{this.props.sureButtonTitle ? this.props.sureButtonTitle : '确定'}</button>
                break
            }
        }

        return (
            isShow && <div className='alertRoot' onClick={this.alertDismiss}>
                <div className='alertBgView'>
                    <img className='alertHeaderImg' src={alertHeader} mode='widthFix'/>
                    {this.props.middleTextView}
                    {bottomBtnView}
                </div>
                <img className='alertCloseImg' src={alertClose} onClick={this.alertDismiss}/>
            </div>
        )
    }

    sure = () => {
        this.alertDismiss()
        this.props.onSureClick ? this.props.onSureClick() : this.alertDismiss()
    };

    cancel = () => {
        this.alertDismiss()
        this.props.onCancelClick ? this.props.onCancelClick() : this.alertDismiss()
    };

    alertShow = () => {
        this.setState({
            isShow: true
        })
    };

    alertDismiss = () => {
        this.setState({
            isShow: false
        })
    }

}

export default Alert
