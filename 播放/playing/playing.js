import React from 'react';
import './reset.css'
import './sass/playing.scss'
import './sass/playingRight.scss'
import Navigation from './navigation'
import Footer from './footer'
class Playing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
            <Navigation></Navigation>
            <div className="container">
                <div className='left'>
                    <div className="screen">
                        <div className='photo'></div>
                        <div className='line'></div>
                        <div className='progress'>
                            <div className='start'></div>
                            <div className='next'></div>
                            <div className='time'>00:00/27:38</div>
                        </div>
                    </div>
                    <div className="danmu">
                        <div className="word">300 人正在看，509 条实时弹幕</div>
                        <div className="switch"></div>
                        <div className="setting"></div>
                        <div className='input'>
                             <div className="A"></div>
                             <div className="inputword">弹幕礼仪 ></div>
                             <div className='send'>发送</div>
                        </div>
                    </div>
                    <div className="property">
                        <div className="proTitle">
                            <span>【C语言】C语言视频教程</span>
                            <div className='ouc'>OUC</div>
                            <div className='Cyuyan'>C语言</div>
                            <div className='jia'>+</div>
                            <div className='gao'>稿件投诉</div>
                            <div className='dian'></div>
                        </div>
                        <div className="proContent">
                                huifeofw fiodshff fewhfof oipoewfs opewfidf oijfpoiaafiopfefpo fiahfpfhifpaew 【ebdewfdjoieljwfkndto4ijndjfkdmfghtirkmnbhe
rjkd hefdiufnb ohgrgjsafhfsl hriraiefhspf符合iou  nacnzn cPou uh dmpFP D jiopsaphpi afnijefh hrwiuef wefhi ruweihfjshj fsjk efd
iu wewehifs hwfuifeiwu iusdhkj efuhkj ieufhsdkjv wefuhsdvj sdhf.
efhwjscn,go;hdvs.n ydvh v gyrehujcxn ,m[pwkas/cmzxfehkjiurwd ehafuisd rwef9 ewfhui ef d 9fdjx efdn wem fefwdhvskjguhdv
sjghdsvn, rgohvn t t4o 4iel4083 33p8rwocehw kj  r e,mjmrsgrsdf

                            </div>
                        <div className="proFootera">
                            <div>…</div>
                            <div>发展</div>
                            </div>
                        <div className="proFooterb">
                            <div> <span className="jiaoyu">科技 > 教育</span>23.4万播放，525弹幕</div>
                            <div>2019-11-20  06:20</div>
                        </div>
                    </div>
                    <div className='Comment'>评论（437）</div>
                    <div className="lineOne"></div>
                    <div className="arrange">
                        <span>按热度排序</span> | 按时间排序
                    </div>
                    <div className="comment">
                        <div className="userOne">
                            <div className="userOneFirst">
                                <div className="headImg"></div>
                                <textarea placeholder="和大家谈谈你的看法吧~注意文明发言噢~"></textarea>
                            </div>
                            <div className="userOneSecond">
                                <div className="expression">
                                    <div className="xiaolian"></div>表情
                                </div>
                                <div className="sending">发表评论</div>
                            </div>
                        </div>
                        <div className="lineTwo"></div>
                        <div className='sendtime'>     
                        <span className="sendtimea">共20页 <span>1</span> 2 3 … 19 20</span>     跳至第___页
                            </div>
                        <div className="userTwo">
                            <div className="userTwoL">
                                <div className="headImg"></div>
                                <div className="guanzhu">关注</div>
                            </div>
                            <div className="detail">
                                <div className="userLevel">
                                    <div className="up">UP</div>
                                    <div className="level">ITSTUDIO<span>Lv6</span></div>
                                </div>
                                <div className="comWord">
                                <span>伍六七应援团974963590</span>
<span>“不拼尽全力试一下的话，又怎么知道呢，这是阿七对鸡大保说的。”“一直以来都是你在做决定，这一
次，就让我来决定吧”</span>
<span>《刺客伍六七》是一部优秀的国漫，它的人物画风或许还没有那么精美，引人注意的是那无厘头的搞
笑致敬星爷的片段，有搞笑，有激斗，也有不经意之间的感动，剧情里的台词也很燃，向保镖大春说的:
“我是这个岛的保安，守护这个岛，是我的责任！”</span> 
                            </div>
                                <div className="comTime">
                                    <span>来自安卓客户端</span>
                                    <span>2019-11-27 07:00</span>
                                    <div className="good"></div>
                                    <span>982</span>
                                    <div className="bed"></div>
                                    回复
                                </div>
                            </div>
                        </div>
                        <div className="userThree">
                            <span className="a">①</span>
                            <span className="b">Lv3</span>
                            <span >
                            太阳和少量的空间 回复i老师的话合法的 sxf和攻击速度合适 ghsjd gjsfjvkc huh
    jlk 建瓯人物身份和哦和 我饿色的看 和发送来的 而忽视
                                </span>
                        </div>
                        <div className="userthreeTime">
                        <div className="comTime">
                                    <span>2019-11-27 07:00</span>
                                    <div className="good"></div>
                                    <span>982</span>
                                    <div className="bed"></div>
                                    回复
                                </div>
                        </div>
                        <div className="userThree">
                            <span className="a">②</span>
                            <span className="c">Lv4</span>
                            <span >
                            urygfh yefj给 hfowefh ehtuidv guhdsvjk hwedsjvmewufds fedvbuwjkbsc rgikb3
                                </span>
                        </div>
                        <div className="userthreeTime">
                        <div className="comTime">
                                    <span>2019-11-27 07:00</span>
                                    <div className="good"></div>
                                    <span>982</span>
                                    <div className="bed"></div>
                                    回复
                                </div>
                        </div>
                        <div className="huifu">
                        共306条回复<span>展开</span>
                        </div>
                        <div className="lineTwo"></div>
                        <div className='sendtime'>     
                        <span className="sendtimea">共20页 <span>1</span> 2 3 … 19 20</span>     跳至第___页
                            </div>
                        <div className="userFoure">
                          <div className="userOneFirst">
                            <div className="headImg"></div>
                            <textarea placeholder="和大家谈谈你的看法吧~注意文明发言噢~"></textarea>
                        </div>
                        <div className="userOneSecond">
                            <div className="expression">
                                <div className="xiaolian"></div>表情
                            </div>
                            <div className="sending">发表评论</div>
                        </div>
                       </div>  
                    </div>
                </div>
                <div className='right'>
                    <div className="headingTop">
                        <div className="headingTopImg"></div>
                        <div className="headingTopR">
                            <div className="ITS">
                                <span>ITSTUDIO</span>
                                <div className="envelope"></div>发消息
                            </div>
                            <div className="introduction">这个人好懒，没有写个人简介~</div>
                        </div>
                    </div>
                    <div className="button">
                        <div className="charge">充电</div>
                        <div className="attention">
                                + 关注4.3万 
                            </div>
                    </div>
                    <div className="danmuList">
                        <div>弹幕列表
                            <div className="sandian"></div>
                        </div>
                        <div>展开</div>
                    </div>
                    <div className="shiping">
                        <div className="danmuList">
                            <div>视频选集
                                <div className="sanhang"></div>
                            </div>
                            <div>1/2</div>
                        </div>
                        <div className="P1">
                            <div className="bofangBlue"></div>
                            <span>P1 UI</span>
                        </div>
                        <div className="P2">P2 前端</div>
                    </div>
                    <div className="foure">
                        <div className="foureS">
                            <div className="photoes" id='zan'></div>
                            <div className="num">2003</div>
                        </div>
                        <div className="foureS">
                            <div className="photoes" id='toubi'></div>
                            <div className="num">1874</div>
                        </div>
                        <div className="foureS">
                            <div className="photoes" id='shoucang'></div>
                            <div className="num">345</div>
                        </div>
                        <div className="foureS">
                            <div className="photoes" id='zhuanfa'></div>
                            <div className="num">34</div>
                        </div>
                    </div>
                    <div className="keji">
                        <div className="kejiList">科技热榜</div>
                        <div className="tuijian">相关推荐</div>
                    </div>
                    <div className="wuliuqi">
                        <div className="wuliuqiPhoto"></div>
                        <div>
                            <div className="h6">
                                   <div>【手书】【刺客伍六七】</div> 
                                    <div>《内线》-许嵩  【华语BG… </div>
                                </div>
                            <div className="name">人艰不拆君x</div>
                            <div className="bottom">35.2万浏览 5346弹幕
                                <div className='fangkuai' id="yellow">1</div>
                            </div>
                        </div>
                    </div>
                    <div className="wuliuqi">
                        <div className="wuliuqiPhoto"></div>
                        <div>
                            <div className="h6">
                                   <div>【手书】【刺客伍六七】</div> 
                                    <div>《内线》-许嵩  【华语BG… </div>
                                </div>
                            <div className="name">人艰不拆君x</div>
                            <div className="bottom">35.2万浏览 5346弹幕
                                <div className='fangkuai' id="green">2</div>
                            </div>
                        </div>
                    </div>
                    <div className="wuliuqi">
                        <div className="wuliuqiPhoto"></div>
                        <div>
                            <div className="h6">
                                   <div>【手书】【刺客伍六七】</div> 
                                    <div>《内线》-许嵩  【华语BG… </div>
                                </div>
                            <div className="name">人艰不拆君x</div>
                            <div className="bottom">35.2万浏览 5346弹幕
                                <div className='fangkuai' id="gray">3</div>
                            </div>
                        </div>
                    </div>
                    <div className="wuliuqi">
                        <div className="wuliuqiPhoto"></div>
                        <div>
                            <div className="h6">
                                   <div>【手书】【刺客伍六七】</div> 
                                    <div>《内线》-许嵩  【华语BG… </div>
                                </div>
                            <div className="name">人艰不拆君x</div>
                            <div className="bottom">35.2万浏览 5346弹幕</div>
                        </div>
                    </div>
                    <div className="wuliuqi">
                        <div className="wuliuqiPhoto"></div>
                        <div>
                            <div className="h6">
                                   <div>【手书】【刺客伍六七】</div> 
                                    <div>《内线》-许嵩  【华语BG… </div>
                                </div>
                            <div className="name">人艰不拆君x</div>
                            <div className="bottom">35.2万浏览 5346弹幕</div>
                        </div>
                    </div>
                    <div className="more">展开更多</div>
                </div>
            </div>
            <Footer></Footer>
            </>
         );
    }
}
 
export default Playing;