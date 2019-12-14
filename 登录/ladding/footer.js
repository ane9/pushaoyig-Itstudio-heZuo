import React from 'react';
import './sass/footer.scss'
class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <>
            <div className="footer">
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
                                <div className="word">新浪微博</div>
                            </div>
                            <div className="weixin">
                                <div className="photo"></div>
                                <div className="word">官方微信</div>
                            </div>
                        </div>

                    </div>
                    <div className="footerTwo">
                        <div className="photo">
                            <div className="photo1"> </div>
                            <div className="photo2"> </div>
                            <div className="photo3"> </div>
                        </div>
                        <div className="word">
                            <p className="one">
                                广播电视节目制作经营许可证：（沪）字第1248号|网络文化经营许可证：沪网文
                                <span>【016】2296-134</span>号|信息网络传播视听节目许可证：0910417 |
                            </p>
                            <p className="two">
                            互联网ICP备案：沪ICP备13002172号-3沪ICP证：沪B2-20100043 |违法不良信息举报邮箱：help@bilibili.com |违法不良信息举报电话：4000233233转3 | 营业执照
                            </p>
                            <p className='two'>
                                <div className='sphoto1'></div>
                                上海互联网举报中心 | 12318全国文化市场举报网站 | 
                                <div className="sphoto2"></div>
                                  沪公网安备31011002002436号 | 儿童色情信息举报专区</p>
                            <p className='two'>网上有害信息举报专区：
                            <div className="sphoto3"></div>
                             中国互联网违法和不良信息举报中心</p>
                            <p className='two'>亲爱的市民朋友，上海警方反诈劝阻电话“962110”系专门针对避免您财产被骗受损而设，请您一旦收到来电，立即接听。</p>
                            <p className='two'>
                                公司名称：上海宽娱数码科技有限公司|公司地址：上海市杨浦区政立路485号|电话：<span>021-25099888</span>
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    }
}
 
export default Footer;