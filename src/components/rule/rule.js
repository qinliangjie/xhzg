import './rule.scss'
import bgImg from '../../assets/rule.jpg'
import footer from '../../assets/footer.png'
import React, { Component } from 'react'
import QueueAnim from 'rc-queue-anim'
import TweenOne from 'rc-tween-one'

class Rule extends Component{
    render(){
        return(
            <div className="rulemain">
                <img src={bgImg} className="bgImg"></img>
                <div className="title">
                    活動规则
                </div>
                <QueueAnim type={'bottom'}>
                    <div key={1} className="content">
                        <p>
                        1.活動時間：2019年XX月XX日至2019年XX月XX日結束 <br></br>
                        2.參與活動請務必填寫正確的行動電話號碼，確認提交后不可再次修改，避免遺漏訊息。<br></br>
                        3.活動結束后，獎勵將以簡訊的方式統一發送到您預留的行動電話上，請注意查收。<br></br>
                        4.虛寶碼有效期至XX月XX日截止，虛寶碼僅限兌換一次。<br></br>
                        5.預約成就解鎖獎勵為全服發放 ，遊戲伺服器開放前X天安裝註冊即可在遊戲中領取。獎勵檔次將按照最高觸發檔位進行發放（例最終預約人數達到10萬，即發放10萬一檔獎勵，不累計發放）<br></br>
                        6.活動最終解釋權歸MoreFun Game所有。
                        </p>
                    </div>
                </QueueAnim>
                <div className="footer">
                    <img src={footer} ></img>
                    <ul>
                        <a target="_blank" href="http://www.gamemorefun.com/">
                            <li></li>
                        </a>
                        <a target="_blank" href="https://www.facebook.com/tdsgz/">
                            <li></li>
                        </a>
                        <a target="_blank" href="https://userterms.gamemorefun.com/">
                            <li></li>
                        </a>
                        <a target="_blank" href="https://privacypolicy.gamemorefun.com/">
                            <li></li>
                        </a>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Rule