import './maps.scss'
import bgImg from '../../assets/rule.jpg'

import React, { Component } from 'react'
import { Carousel, WingBlank } from 'antd-mobile'
import QueueAnim from 'rc-queue-anim'
import TweenOne from 'rc-tween-one'

class Maps extends Component{
    state = {
        data: ['ss', 'yys', 'sq','zh','aq'],
        imgHeight: 650,
        mapdata:['ss世界就是这样世界就是这样世界就是这样世界就是这样世界就是这样世界就是这样',
                 'yys世界就是这样世界就是这样世界就是这样世界就是这样世界就是这样世界就是这样',
                 'sq世界就是这样世界就是这样世界就是这样世界就是这样世界就是这样世界就是这样',
                 'zh世界就是这样世界就是这样世界就是这样世界就是这样世界就是这样世界就是这样',
                 'aq世界就是这样世界就是这样世界就是这样世界就是这样世界就是这样世界就是这样'],
        slideIndex:0
      }
    change=(e)=>{
        
    }

    componentDidMount() {
        
        
    }
    render(){
        return(
            <div>
            <WingBlank>
            <Carousel className="space-carousel"
            frameOverflow="visible"
            cellSpacing={30}
            slideWidth={0.8}
            infinite
            dots={false}
            beforeChange={(from, to) => {this.change()}}
            afterChange={index => {this.setState({ slideIndex: index });}}
            >
            {this.state.data.map((val, index) => (
               
                <img
                    key={index}
                    src={require('../../assets/map/'+val+'.png')}
                    alt=""
                    style={{ width: '100%',
                            verticalAlign: 'top',
                            marginTop: this.state.slideIndex === index ? '-10px' : 0, }}
                    onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                    }}
                />
            ))}
            </Carousel>
            </WingBlank>
            <p className="maps_Conture">
                {this.state.mapdata[this.state.slideIndex]}
            </p>
            </div>
        )
    }
}

export default Maps