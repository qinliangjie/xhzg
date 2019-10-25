import topbgImg from './assets/BG.png';
import leftImg from './assets/leftImg.png';
import play from './assets/play.png';
import logo from './assets/logo.png';
import React, { Component } from 'react';
import Appointment from './components/Appointment/Appointment';
import Picture from './components/picture/picture';
import Rule from './components/rule/rule';
import Maps from './components/maps/maps';
import QueueAnim from 'rc-queue-anim';
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';
import './App.scss';
import { SlideContainer, SlidePage } from 'react-slidepage';
require('react-slidepage/lib/index.css');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideSwitch:true
    }
  }
  callback=(slideSwitch)=>{
    this.setState({slideSwitch})
  }
  setSliwd=(origin, direction, target)=>{
    if(target==3){
      this.setState({slideSwitch:false})
      this.refs.slideContainer.update()
    }
  }
  render() {
    return (
      <div className="App">
      <SlideContainer page={1} useSwipe={this.state.slideSwitch} ref="slideContainer"  after={(origin, direction, target)=>{this.setSliwd(origin, direction, target);}}>
        <SlidePage className="">
          <img src={topbgImg} className="topbgImg"></img>
          <QueueAnim type={['right']}>
            <img src={logo} key="1" className="logoImg"></img>
            <img src={leftImg} key="2" className="leftImg"></img>
            <div key="3" className="gotoApp">
              <span className="gotoAspan">
                <Texty type={'top'}>前</Texty>
                <Texty type={'bottom'} delay={400}>往</Texty>
                <Texty type={'top'} delay={600}>预</Texty>
                <Texty type={'bottom'}  delay={800}>约</Texty>
              </span>
            </div>
          </QueueAnim>
          <QueueAnim type={['left']} delay={300} animConfig={[{left:['-1rem','-3.8rem']}]}>
            <img src={play} key="1"  className="play"></img>
          </QueueAnim>
        </SlidePage>
        <SlidePage className="">
          <Appointment></Appointment>
        </SlidePage>
        <SlidePage>
          <Maps callback={this.callback} switchs={this.state.slideSwitch}></Maps>
        </SlidePage>
        <SlidePage className="">
          <Picture></Picture>
        </SlidePage>
        <SlidePage className="">
          <Rule></Rule>
        </SlidePage>
        
      </SlideContainer>
      </div>
    );
  }
}

export default App;
