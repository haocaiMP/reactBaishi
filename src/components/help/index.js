import React, { Component } from 'react'
import Header from '../Header';
import Footer from '../Footer'
import bgImg from '../../assets/img/help-inner-bg.jpg';
import h1Gif from '../../assets/img/h1.gif';
import h2Gif from '../../assets/img/h2.gif';
import h3Gif from '../../assets/img/h3.gif';
import h4Gif from '../../assets/img/h4.gif';
import WC from '../../assets/img/wc.png';

import './index.css'
import { Tabs, Collapse } from 'antd';
const TabPane = Tabs.TabPane;
const Panel = Collapse.Panel;

class Help extends Component {
  constructor(p) {
    super(p);
    this.state = {
      panelList1: [{
        header: '重货泡货计费有区别吗？',
        text: '正常情况下，计费都是以实重为主。有些轻泡货体积比较大，因此我们会按体积重量计算，计算公式为：长*宽*高（CM）/6000，如果得出的值大于实际重量，就以这个重量计费。（不规则货物，包括圆锥、圆柱状物体按长方体计算，为长、宽、高三个方向的最大尺寸相乘）'
      },{
        header: '揽收后，快件需要多久能寄到收件人手里？',
        text: '正常情况下，省内件第二天到，江浙沪皖互发也是第二天到。外省发外省大部分地区为3－4天，部分偏远地区要5－7天。'
      },{
        header: '下单后你们多久可以上门揽收？',
        text: '如果您在当天16：00前下的单，正常情况下，我们业务人员都会在两小时间左右上门揽收。如有特殊情况，他们也会提前电话通知到您。'
      },{
        header: '如何查询寄件价格？',
        text: '我们在线下单有统一的参考价格，可以通过微信客服、在线客服、95320电话客服进行查询。 您也可以与我们寄件网点直接询价。'
      },{
        header: '怎样知道我要寄的地址是否能派送？',
        text: '您可以点击“网点”页面，输入您所寄地址的关键字，就可以查到是否有我们的网点。有网点的地区，我们都可以提供寄送服务。'
      },{
        header: '我在淘宝上在线下单后，我还需要打电话联系你们上门取件吗？',
        text: '不需要。 若您已选择淘宝在线下单，无需再次电话联系，寄件公司会根据淘宝在线下单后台系统查看到所有下单的信息，并由客服专员安排取件。 多谢您选择百世快递的服务。'
      },{
        header: ' 我想寄东西，请问如何下单才好？',
        text: '百世快递提供多种下单途径 1、	微信下单：关注“百世快递”微信公众号，选择我要寄件 2、	官网在线客服下单 3、	淘宝平台“我要寄快递”下单 4、	电话下单：拨打我司全国客服热线95320，选择电话下单。'
      }],
      panelList2: [{
        header: '我当着业务员的面验货了，但收到的货不是我的怎么办？',
        text: '需要确认一下验货时外包装是否完整，如果外包装没有问题，面单信息也没有问题，建议您和发件人确认一下。如果您收货时发现货物异样，可以拒收并通知发件人。我们会进行核实。*宽*高（CM）/6000，如果得出的值大于实际重量，就以这个重量计费。（不规则货物，包括圆锥、圆柱状物体按长方体计算，为长、宽、高三个方向的最大尺寸相乘）'
      },{
        header: '为什么你们网站上显示的签收人，不是收件人本人？',
        text: '正常情况下，我们都会送到收件人本人手上，但如果收件人不在，经过他（她）同意后，我们会让他人代收，如收发室、同事等，同时我们也会核对代收人身份。如果收件人没有收到的话，我们会帮助核实查询。'
      },{
        header: '为什么你们网站上查到我的货早上就在派送了，到现在还没有收到？',
        text: '我们的业务员都是按照派送路线挨家挨户派送的，有可能您的地址是在派送线路较远的地带。正常情况下，业务员当天都会派送完毕。如果您比较着急，可以与网站上显示的业务员联系一下。'
      },{
        header: '卖家已有发货记录了，运单号也产生了，为什么你们这里查不到？',
        text: '卖家发货操作后，需要把货交给我们业务员，才会有记录产生。如果没到我们网点的记录，有可能货还在卖家，并且我们网点都是晚上才会中转到分拨中心的，建议您再耐心等待一下。 您也可以与我们寄件网点直接询价。'
      },{
        header: '快件已寄出了，为什么我在网上查不到相关信息？',
        text: '这有可能是单号不正常或者您当地网络异常导致，您可以拨打我们95320，使用正确单号进行进一步查询。'
      },{
        header: '我要查一个件，但发货人没有给我单号，怎么办？',
        text: '不需要。 我们运单查询系统需要对应相关运单号码，并且为了保证快递的安全，建议您向您的发件人索取单号后再进行查询。 多谢您选择百世快递的服务。'
      }],
      panelList3: [{
        header: '为什么你们收寄人员每次都要开箱检查？',
        text: '我们收寄人员要开箱检查的主要目的是为了检查您所托付货物的内容、数量，一方面这是对您负责，同时也是为了保证货物能够安全准时送达目地的，因为有的货物在运输途中可能会对其它快件造成损伤或者有的货物是国家禁止运输的（比如易燃易爆等物品），特别是航空件，机场安检处都会做详细的检查，若被查出有违禁品，机场人员都有权对该票货物进行扣留甚至不予退回，这都会对您造成很大的影响，希望您能谅解。*宽*高（CM）/6000，如果得出的值大于实际重量，就以这个重量计费。（不规则货物，包括圆锥、圆柱状物体按长方体计算，为长、宽、高三个方向的最大尺寸相乘）'
      },{
        header: '快件发出后，如果我要退回如何处理？',
        text: '快件发出后需要退回，为了保证快件安排，您需要联系寄件网点，由寄件网点确认后通知派送地网点退回。由于我们都是集包操作，中途无法拆包退回，需要到了目的地网点才能退回。'
      },{
        header: '当收件人不在，导致快件派送不成功的时候，你们将如何处理？',
        text: '在正常工作时间内快件无人接收，我们将安排免费再派；如再次派送仍无人接收且无法联系到收件人时，我们将有专人联系寄件客户，告知快件状况，根据寄件客户的意见处理该票快件'
      },{
        header: '如果快件在运输途中发生遗失或损坏，我该怎么处理？',
        text: '如果发生此类情况，请您及时联系我们微信客服、在线客服、95320电话客服，我们受理后会第一时间安排专人负责跟进处理，并随时与您保持和沟通。 您也可以与我们寄件网点直接询价。'
      },{
        header: '如何知道我寄的物品是否在你们承运范围内？',
        text: '请点击页面底部“禁忌需知”，其中已列明不能承运的物品，如果仍有疑问的话，可以拨打我们全国客服热线95320查询。'
      },{
        header: '我没有当场验货，但事后发现货物有问题，你们能受理吗？',
        text: '收货时如果没有验货，但收件人已签收，说明我们的寄送服务已完成了。因为签收后发现有问题，责任原因无法判断，所以我们无法受理。'
      },{
        header: '我要验货，有什么要注意的吗？',
        text: '收件人都有验货的权利，但为了界定责任，避免后续的争议，收件人需要在验货前需要检查一下外包装情况，并在面单上注明外包装是否完整，然后再开箱检查内物。'
      },{
        header: '你们有到付业务吗？',
        text: '我们有到付业务，但到付业务内部环节较为复杂，因此收费会高于现付业务。并且也有可能因为联系不到收件人或者收不到钱造成快件延误。如果您的快件比较急，还是建议您使用现付业务。'
      },{
        header: '我的东西很贵重，你们怎么保证它的安全？',
        text: '我们可以提供贵重物品寄送服务，需要您购买贵重物品面单。通过这个面单发的货，都会层层交接，每个环节都有交接记录，丢失的概率很低。'
      },{
        header: '我要加盟，怎么操作？',
        text: '您可以通过我们官网加盟合作中，查到相关加盟电话，也可以在线填写加盟申请表格'
      }]
    }
  }
  // change = (e) => {
  //   let arr = e.map(Number)
  //   console.log(arr)
  //   let list = document.querySelectorAll('.ant-collapse-header');
  //   list.forEach((item,index)=>{
  //     item.classList.remove('act')
  //   })
  //   arr.forEach(item => {
  //     list[item].classList.add('act')
  //   }) 
  // }
  // tab = (e) => {
  //   console.log(e)
  // }
  render() {
    return (
      <div style={{position:'relative',top:'-80px',backgroundColor: '#f7f7f7'}}>
        <Header bgImg={bgImg}/>
        <div className='help_box'>
            <h2 className='hb_title'>
              <i className='iconfont icon-bangzhu'></i>
              帮助中心
            </h2>
            <div className='hb_main'>
              <div className='hm_tu'>
                <img src={h2Gif} alt=""/>
                <img src={h3Gif} alt=""/>
                <img src={h4Gif} alt=""/>
                <img src={h1Gif} alt=""/>
              </div>
              <div className='hm_con'>
                <Tabs type="card">
                  <TabPane tab="寄件/下单" key="1">
                    <Collapse bordered={false}  >
                      {
                        this.state.panelList1.map((item,index)=> {
                          return (
                            <Panel header={item.header} key={index}>
                              <p style={{ paddingLeft: 24 }}>
                                {item.text}
                              </p>
                            </Panel>
                          )
                        })
                      }          
                    </Collapse>
                  </TabPane>
                  <TabPane tab="查件/收件" key="2">
                    <Collapse bordered={false}>
                      {
                        this.state.panelList2.map((item,index)=> {
                          return (
                            <Panel header={item.header} key={index}>
                              <p style={{ paddingLeft: 24 }}>
                                {item.text}
                              </p>
                            </Panel>
                          )
                        })
                      }          
                    </Collapse>
                  </TabPane>
                  <TabPane tab="寄前/寄后" key="3">
                    <Collapse bordered={false}>
                      {
                        this.state.panelList3.map((item,index)=> {
                          return (
                            <Panel header={item.header} key={index}>
                              <p style={{ paddingLeft: 24 }}>
                                {item.text}
                              </p>
                            </Panel>
                          )
                        })
                      }          
                    </Collapse>
                  </TabPane>
                </Tabs>
              </div>
            </div>
            <img src={WC} alt="" className='wc'/>
        </div>
        <Footer />
      </div>
    )
  }
}
export default Help;