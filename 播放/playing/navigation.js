import React from 'react'
import './sass/navigation.scss'
import './sass/navigation2.scss'
class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
              <div className='headingFirst'>
                <div className='headingFirstOne'>
                <div className="headingFirstOnePhoto"></div>
                <ul className='headingFirstOneul'>
                    <li>主站</li>
                    <li>游戏中心</li>
                    <li>直播</li>
                    <li>会员购</li>
                    <li>漫画</li>
                    <li>赛事</li>
                    <li>BML</li>
                </ul>
                <input placeholder="在此打开二次元的大门吧~">
                    </input>
                    <div className='headingFirstInputPhoto'></div>
                    <div className='headingFirstThreePhoto'></div>
                    <ul className='headingFirstTwoul'>
                        <li>动态</li>
                        <li>历史</li>
                        <li>制作中心</li>
                    </ul>
                    <div className="navigationButton">
                        <span>投稿</span></div>
                </div>
            </div>
            </>
         );
    }
}
 
export default Navigation;