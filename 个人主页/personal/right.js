import React from 'react'
import './sass/right.scss'
class Right extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
            <div className='Right'>
                <div className='announce'>
                     <div className="annTitle">
                         公告
                         <div className="annButton">
                             <div className="annButton1">发布公告</div>
                             <div className="annButton2">历史</div>
                         </div>
                     </div>    
                     <div className="annLine"></div>    
                     <div className="annP"><div className="annphoto"></div></div>    
                </div>     
                <div className='album'>
                    <div className="alTitle">
                        <div>我的相簿<span>3></span></div>
                        <div className="lookMore">查看更多</div>
                    </div>
                    <div className="annLine"></div>
                    <div className="alPhoto">
                        <div className='alPhotos'></div>
                        <div className='alPhotos'></div>
                        <div className='alPhotos'></div>
                        <div className='alPhotos'></div>
                    </div>
                </div>     
                <div className='favorites'>
                    <div className="alTitle">
                        <div>我的收藏夹</div>
                        <div className="lookMore">查看更多</div>
                    </div>
                    <div className="annLine"></div>
                    <div className="faPhoto">
                        <div>
                            <div className='faPhotos'></div>
                            <div className='faDefault'>
                                默认收藏夹<div className='public'>公开</div>
                            </div>
                        </div>
                    </div>
                </div>     
            </div>
            </>
        );
    }
}
 
export default Right;