import React from 'react';
import './sass/heading.scss'
class Heading extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
            {/* <div className='headingFirst'>
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
                </div>
            </div> */}
            <div className="headingTwo ">
                <div className='headingTwos'>
                    <div className="headingTwoL "></div>
                    <div className="headingTwoR "></div>
                </div>
                <div className="headingTwoL "></div>
                <div className="headingTwoR "></div>
            </div>
            <div className="headingThree ">
                <div className="headingThrees">
                <div className="headingThreeL "></div>
                <div className="headingThreeR ">
                <div className="headingThreeROne ">
                    <div className="headingThreeROneL ">
                    账户登录
                    </div>
                    <div className="headingThreeROneR ">
                    扫码登陆
                    </div>
                </div>
                <div className="headingThreeRtwo">
                   <div className="headingThreeRzhanghao">账号</div>
                    <div className="headingThreeRzhanghaoLine">
                    <div className="headingThreeRzhanghaoLineR"></div>
                    </div>
                </div>
                <div className="headingThreeRthree">
                    <div className="headingThreeRmima">密码</div>
                    <div className="headingThreeRmimaLine"></div> 
                </div>
                <div className="headingThreeRfore">
                    <div className="htrfa"></div>
                    <h6 >记住我</h6>
                    <p>不是自己的电脑不要勾选此项</p>
                    <a>无法登录？</a>
                </div>
                <div className="headingThreeRfive">
                    <button className='buttonOne'>登录</button>
                    <button className='buttonTwo'>注册</button>
                </div>
                <div className="headingThreeRsix">
                    <div className='headingThreeRsixS'></div>
                    其他登录方式
                    <div className='headingThreeRsixS'></div>
                </div>
                <div className="headingThreeRseven">
                    <div className="headingThreeRsevenS1"></div>
                    <div className="headingThreeRsevenS2"></div>
                    <div className="headingThreeRsevenS3"></div>
                    <div className="headingThreeRsevenS4"></div>
                </div>
                </div>
                </div>
            </div>
            {/* <div className="footer">
                <div className="footercontain">
                    <div className="footerOne">
                        <div className="footerOneL">
                        <div className="tips">bilibili</div>
                            <ul>
                                <li>关于我们</li>
                                <li>联系我们</li>
                                <li>加入我们</li>
                                <li>友情链接</li>
                                <li>bilibili认证</li>
                                <li>Inverstor Relations</li>
                            </ul>
                        </div>
                        <div className="footerOneC">
                           <div className="tips">传送门</div>
                           <ul>
                               <li>帮助中心</li>
                               <li>高级弹幕</li>
                               <li>活动专题页</li>
                               <li>侵权申诉</li>
                               <li>活动中心</li>
                               <li>用户反馈论坛</li>
                               <li>壁纸站</li>
                               <li>名人堂</li>
                               <li>专车号服务中心</li>
                           </ul>
                        </div>
                        <div className="footerOneR">
                            <div className="download">
                                <div className="photo"></div>
                                <div className="word">客户端下载</div>
                            </div>
                            <div className="weibo">
                                <div className="photo"></div>
                                <div className="word">客户端下载</div>
                            </div>
                            <div className="weixin">
                                <div className="photo"></div>
                                <div className="word">客户端下载</div>
                            </div>
                        </div>

                    </div>
                    <div className="footerTwo">
                        <div className="photo"></div>
                        <div className="word">
                            <p className="one">
                                广播电视节目制作经营许可证：（沪）字第1248号|网络文化经营许可证：沪网文
                                <span>【016】2296-134</span>号|信息网络传播视听节目许可证：0910417 |
                            </p>
                            <p className="two">
                            互联网ICP备案：沪ICP备13002172号-3沪ICP证：沪B2-20100043 |违法不良信息举报邮箱：help@bilibili.com |违法不良信息举报电话：4000233233转3 | 营业执照
                            </p>
                            <p className='two'>上海互联网举报中心 | 12318全国文化市场举报网站 |   沪公网安备31011002002436号 | 儿童色情信息举报专区</p>
                            <p className='two'>网上有害信息举报专区：  中国互联网违法和不良信息举报中心</p>
                            <p className='two'>亲爱的市民朋友，上海警方反诈劝阻电话“962110”系专门针对避免您财产被骗受损而设，请您一旦收到来电，立即接听。</p>
                            <p className='two'>
                                公司名称：上海宽娱数码科技有限公司|公司地址：上海市杨浦区政立路485号|电话：<span>021-25099888</span>
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div> */}
            </>
         );
    }
}
 
export default Heading;