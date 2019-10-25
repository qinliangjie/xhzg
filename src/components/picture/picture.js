import bgImg from '../../assets/pic/BG4.jpg'
import pic1 from '../../assets/pic/pic1.jpg'
import pic2 from '../../assets/pic/pic2.jpg'
import pic3 from '../../assets/pic/pic3.jpg'
import pic4 from '../../assets/pic/pic4.jpg'
import pic5 from '../../assets/pic/pic5.jpg'
import './picture.scss'
import React, { Component } from 'react'
import QueueAnim from 'rc-queue-anim'
import TweenOne from 'rc-tween-one'

class Picture extends Component{
    render(){
        return(
            <div className="picmain">
                <img src={bgImg} className="bgImg"></img>
                <div className="picbox">
                    <div className="pic1">
                        <img src={pic1}></img>
                    </div>
                    <div className="pic4">
                        <img src={pic4}></img>
                    </div>
                    <div className="pic2">
                        <img src={pic2}></img>
                    </div>
                    <div className="pic3">
                        <img src={pic3}></img>
                    </div>
                    
                    <div className="pic5">
                        <img src={pic5}></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default Picture