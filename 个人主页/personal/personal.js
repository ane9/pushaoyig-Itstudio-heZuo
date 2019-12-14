import React from 'react'
import Top from './top'
import Right from './right'
import './reset.css'
import './sass/person.scss'
class Personal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
            <Top></Top>
            <div className="Container">
                 <div className="Center">
                     <div className='left'>
                         <div className="video">
                             <div className='myVideo'>
                                 我的视频
                                 <div className='Sousuo'>
                                     <input placeholder='在此搜索该up主的作品~'></input>
                                     <div className='sousuo'></div>
                                 </div>
                             </div>
                             <div className='vidLine'></div>
                             <div className='myWork'>
                                 <div className="myTitle">
                                     我的代表作
                                     <div className='sendmore'>
                                         <div className="sendmores">
                                             上传更多
                                         </div>
                                     </div>
                                 </div>
                                 <div className="myPhoto1">
                                     <div className='border'>
                                         <div className='myphotos'></div>
                                     </div>
                                     <div className='myright'>
                                         <h3>震惊！美国某幼儿园竟发生如此惨案！</h3>
                                         <h6>游戏>单机游戏</h6>
                                         <p>2019/10/25</p>
                                         <h4>
                                那一天，断罪幼儿园的小学生终于想起了被骷髅头
紫薯精支配的恐惧......
                            </h4>
                                     </div>
                                 </div>
                                 <div className="myPhoto2">
                                     <div className="myphotoL">
                                         <div className="myphotosmall" id='small1'></div>
                                         <div className="myphotosmall" id='small2'></div>
                                         <div className="myphotosmall" id='small3'></div>
                                         <div className="myphotosmall" id='small4'></div>
                                         <div className="myphotosmall" id='small5'></div>
                                         <div className="myphotosmall" id='small6'></div>
                                     </div>
                                     <div className="LookMore" id="top">查看更多</div>
                                 </div>
                             </div>
                             <div className='vidLine'></div>
                             <div className='allVideoTitle'>
                                 <div>全部视频<span >728></span></div>
                                 <div className='allVTiileC'>
                                     <div className='pinck'>最新发布</div>
                                     <div>最多播放</div>
                                     <div>最多收藏</div>
                                 </div>
                                 <div className='LookMore'>查看更多</div>
                             </div>
                         </div>
                         <div className="column">
                             <div className='columnTitle'>
                                 <div>我的专栏<span>1></span></div>
                                 <div className='LookMore'>查看更多</div>
                             </div>
                             <div className='columnLine'></div>
                             <div className="columnMain"></div>
                         </div>
                     </div>
                     <Right></Right>
                </div>
            </div>
           
            </>
         );
    }
}
 
export default Personal;