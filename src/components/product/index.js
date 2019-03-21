import React, { Component } from 'react'
import Header from '../Header';
import Footer from '../Footer';
import bgImg from '../../assets/img/produce-inner-bg.jpg';
import pm1 from '../../assets/img/s1.jpg';
import pm2 from '../../assets/img/s2.jpg';
import pm3 from '../../assets/img/s3.jpg';
import pm4 from '../../assets/img/s4.jpg';
import pm5 from '../../assets/img/s5.jpg';
import pm6 from '../../assets/img/s6.jpg';
import pm7 from '../../assets/img/s7.jpg';
import pm8 from '../../assets/img/s8.jpg';
import pm9 from '../../assets/img/s9.jpg';
import { Button,Popover } from 'antd';
import './index.css';
const content = (
  <div>
    啊数据的快乐撒撒胡椒粉点击；第三方高度近视；都是借口；<br />
    收到三六九等；是黎巴嫩籍开始的尼古拉斯的可能
  </div>
);
export default class Product extends Component {
  render() {
    return (
      <div style={{position:'relative',top:'-80px',backgroundColor: '#f7f7f7'}}>
        <Header bgImg={bgImg}/>
        <div className='pro_box'>
            <h2 className='pb_title'>
              <i className='iconfont icon-chanpinfuwu'></i>
              产品服务
            </h2>
            <div className='pb_main'>
              <div className='pm_h'> <span>20000</span>多个网点 <span>3000</span>多条班车线路 <span>216</span>多个转运中心</div>
              <div className='pm_common pm_1'>
                <div className='pm_l'>
                  <img src={pm1} alt="" />
                </div>
                <div className='pm_r'>
                  <p style={{fontSize: '20px', lineHeight: '40px', color: '#666'}}>普通快递</p>
                  <p style={{fontSize: '14px', color: '#a7a7a7', lineHeight: '40px'}}>365全天候服务特色增值服务：代收货款、保价、签回单、委托收件</p>
                  <p style={{fontSize: '15px'}}>百世快递可以提供<span style={{color: '#0085ff'}}>全国33个省、直辖市</span>的高性价比门<br/>到门快递服务。快速高效地进行发运、中转、派送，并对客户<br/>进行标准承诺。</p>
                  <div className='gn'>
                    <div className='gn_l'>
                      <p>快捷的</p>
                      <p></p>
                      <p>安全的</p>
                      <p></p>
                      <p>高效的</p>
                    </div>
                    <div className='gn_r'>
                      <p>时效服务</p>
                      <p className='hr'></p>
                      <p style={{marginLeft: '10px'}}>运输服务</p>
                      <p className='hr'></p>
                      <p style={{marginLeft: '10px'}}>便捷服务</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='pm_common pm_2 pm_color'>
                <div className='pm_l pm_2_l'>
                  <p style={{fontSize: '20px', lineHeight: '40px', color: '#666'}}>淘宝推荐物流</p>
                  <p style={{padding: '10px 0 30px 100px'}}>百世快递与<span style={{color: '#0085ff'}}>淘宝推荐物流平台</span>于正式签约开展合作，<br />为淘宝用户提供更贴心的服务。</p>
                  <p className="li">- 业务系统对接</p>
                  <p className="li">- 专职服务团队</p>
                  <p className="li">- 限时投诉处理</p>
                </div>
                <div className='pm_r'>
                  <img src={pm2} alt="" />
                </div>
              </div>
              <div className='pm_common pm_3'>
                <div className='pm_l'>
                  <img src={pm3} alt="" />
                </div>
                <div className='pm_r'>
                  <p style={{fontSize: '20px', lineHeight: '40px', color: '#666'}}>物种快递</p>
                  <p style={{fontSize: '14px', color: '#a7a7a7'}}>快递的标准运费+保费（保费＝声明价值总金额×5‰），最低收费5元，尾数遵循四舍五入的原则。</p>
                  <p style={{fontSize: '15px', color: '#666', margin: '36px 0'}}>百世快递对托寄物价值在<span style={{color: '#0085ff'}}>5千以内</span>的快件提供更安全，更便<br />捷的服务。</p>
                  <p className="li">- 专人专车派送</p>
                  <p className="li">- 全程跟踪</p>
                  <p className="li">- 凭证签收</p>
                  <p className="li">- 专属理赔</p>
                </div>
                
              </div>
              <div className='pm_common pm_4 pm_color'>
                <div className='pm_l pm_4_l'>
                  <p style={{fontSize: '20px', lineHeight: '50px', color: '#666', paddingLeft: '100px'}}>代收货款</p>
                  <p style={{paddingLeft: '100px',fontSize: '12px', color: '#a7a7a7'}}>适用对象：所有大陆月结客户</p>
                  <p style={{padding: '40px 0 30px 100px',fontSize: '16px'}}>百世快递可按照寄件方客户（卖方）与收件方客户（买<br />方）达成交易协议的要求，为寄件客户提供快捷的货物<br />（商品）专递，并代寄件客户向收件客户收取货款；同<br />时，可以提供次周、<span style={{color: '#0085ff'}}>隔周返还</span>货款的服务。</p>
                  <Popover placement="topLeft" content={content}>
                    <Button type='primary'>寄件须知</Button>
                  </Popover>
                </div>
                <div className='pm_r'>
                  <img src={pm4} alt="" />
                </div>
              </div>
              <div className='pm_common pm_5'>
                <div className='pm_l'>
                  <img src={pm5} alt="" />
                </div>
                <div className='pm_r pm_5_r'>
                  <p style={{fontSize: '20px', lineHeight: '50px', color: '#666'}}>代收货款</p>
                  <p style={{fontSize: '12px', color: '#a7a7a7'}}>百世快递服务过程中，寄件人可对托寄物内容向我司声明价值，并缴纳相<br />应的费用，当货物在运输过程中发生损坏时，我司将按照托运人的声明价<br/>值赔偿一定损失。</p>
                  <p style={{padding: '40px 0 30px',fontSize: '16px'}}>只需使用特种运单，在“声明价值”栏如实填写保价金额<br />数（元），即完成该票快件的保价操作。</p>
                  <Popover placement="topLeft" content={content}>
                    <Button type='primary'>寄件须知</Button>
                  </Popover>
                </div>
              </div>
              <div className='pm_common pm_6 pm_color'>
                <div className='pm_l pm_6_l'>
                  <p style={{fontSize: '20px', lineHeight: '50px', color: '#666', paddingLeft: '100px'}}>代签回单</p>
                  <p style={{marginTop: '10px', paddingLeft: '100px',fontSize: '12px', color: '#a7a7a7'}}>只需要在同时使用运单和回单专用袋，即完成该票快件的操作。</p>
                  <p style={{padding: '10px 0 30px 100px',fontSize: '16px'}}>应客户需求，百世快递在成功派送快件后，将寄件方客<br />户提供的需收件方客户签名的收条或收货单之类的单据<br />返回寄件方客户的服务。<br /><span style={{color: '#0085ff'}}>5元 / 票</span>，注：运费另计</p>
                </div>
                <div className='pm_r'>
                  <img src={pm6} alt="" />
                </div>
              </div>
              <div className='pm_common pm_7'>
                <div className='pm_l' style={{marginTop: '29px'}}>
                  <img src={pm7} alt="" />
                </div>
                <div className='pm_r pm_7_r'>
                  <p style={{fontSize: '20px', lineHeight: '50px', color: '#666'}}>限时派送</p>
                  <p style={{fontSize: '12px', color: '#a7a7a7'}}>服务费用为运费的10%，费用最低收取额为2元，最高收取额为10元，尾<br />数不足1元不计。</p>
                  <p style={{padding: '40px 0 30px',fontSize: '16px'}}>承诺在规定的时间安全送达，如因我司原因未能按时送<br />达，该票件的运费将会在贵公司的月结款中自动扣除。</p>
                  <Popover placement="topLeft" content={content}>
                    <Button type='primary'>寄件须知</Button>
                  </Popover>
                </div>
              </div>
              <div className='pm_8 pm_color'>
                <div className='pm_8_h'>计费方式</div>
                <div className='pm_8_con'>
                  <div className='pc_l'>
                    <img src={pm8} alt=""/>
                    <p style={{fontSize: '20px', lineHeight: '40px', color: '#666'}}>普通快件</p>
                    <p style={{fontSize: '16px', color: '#0085ff'}}>首重+续重</p>
                    <p style={{fontSize: '12px', lineHeight: '26px',  color: '#a7a7a7'}}>(以寄件所在地公司的标准为依据)</p>
                  </div>
                  <div className='pc_r'>
                    <img src={pm9} alt=""/>
                    <p style={{fontSize: '20px', lineHeight: '40px', color: '#666'}}>轻泡货物</p>
                    <p style={{fontSize: '16px', color: '#0085ff'}}>体积重量大于实际重量的货物</p>
                    <p style={{fontSize: '12px', lineHeight: '26px', color: '#a7a7a7'}}>长(cm) x 宽(cm) x 高(cm)／6000=体积重量（KG）</p>
                    <p style={{fontSize: '12px', lineHeight: '26px', color: '#a7a7a7'}}>不规则货物的长、宽、高取货物的三边最大值计算）</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <Footer />
      </div>
    )
  }
}
