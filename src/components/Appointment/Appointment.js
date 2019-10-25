import bgImg from '../../assets/BG2.jpg'
import download from '../../assets/appdownload.png'
import border from '../../assets/border.png'
import step0L from '../../assets/zero.png'
import step1L from '../../assets/one.png'
import step2L from '../../assets/two.png'
import step3L from '../../assets/three.png'
import step4L from '../../assets/four.png'
import step0R from '../../assets/zeroL.png'
import step1R from '../../assets/oneL.png'
import step2R from '../../assets/twoL.png'
import step3R from '../../assets/threeL.png'
import step4R from '../../assets/fourL.png'
import PropTypes from 'prop-types';
import React, { Component } from 'react'
import QueueAnim from 'rc-queue-anim'
import TweenOne from 'rc-tween-one'
import Children from 'rc-tween-one/lib/plugin/ChildrenPlugin'
import {Steps} from 'antd-mobile'
import './Appointment.scss'
TweenOne.plugins.push(Children);
const Step = Steps.Step;
class Appointment extends Component{
    constructor(props) {
        super(props);
        this.state = {
            animation: {
                Children:{
                    value:123300,
                    floatLength:0,
                    formatMoney:false
                },
                duration: 1000
            }
          
        };
      }
    render() {
        return(
            <div className="main">
                <img src={bgImg} className="bgImg"></img>
                <QueueAnim type={['top']}>
                    <div key="1" className="title" >當前預約人數</div>
                </QueueAnim>
                <QueueAnim type={['top']}>
                    <div key="1" className="number_">
                        <div className="number_bom">
                            <TweenOne
                                animation={this.state.animation}
                            >
                                0
                            </TweenOne>
                        </div>
                        
                    </div>
                </QueueAnim>
                <QueueAnim type={['left']}>
                    <div key="1" className="leftStep">
                        <img src={step4L}></img>
                        <div className="line lineone"></div>
                        <div className="line linetwo"></div>
                        <div className="line linethree"></div>
                    </div>
                </QueueAnim>
                <QueueAnim type={['right']}>
                    <div key="1" className="rightStep">
                        <img src={step4R} ></img>
                    </div>
                </QueueAnim>
                <QueueAnim>
                    <img className="down_btn" src={download}></img>
                </QueueAnim>
            </div>
        )
    }
}
Appointment.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
  paused: PropTypes.bool
};
export default Appointment