import React, { Component } from 'react'
import Header from '../Header';
import Footer from '../Footer'
import bgImg from '../../assets/img/news-inner-bg.jpg';
import { Timeline, Pagination } from 'antd';
import './index.css'
export default class News extends Component {
  onChange = (n) => {
    // console.log('Page: ', n);
    let dom = document.querySelectorAll('.ant-timeline-item');
    dom.forEach(item => {
      item.querySelector('.ant-timeline-item-head').style.backgroundColor = '#cacaca';
      item.querySelector('.ant-timeline-item-tail').style.borderColor = '#cacaca'
    })
    dom[n-1].querySelector('.ant-timeline-item-head').style.backgroundColor = '#0085ff';
    dom[n-1].querySelector('.ant-timeline-item-tail').style.borderColor = '#0085ff';
    let top = dom[n-1].offsetTop;
    console.log(window)
    window.scrollTo(0, top-20)
  }
  render() {
    return (
      <div style={{position:'relative',top:'-80px',backgroundColor: '#f7f7f7'}}>
        <Header bgImg={bgImg}/>
        <div className='news_box'>
            <h2 className='nb_title'>
              <i className='iconfont icon-ai-new'></i>
              新闻中心
              <span>所有新闻 | 百世快讯 | 行业动态</span>
            </h2>
            <div className='nb_main'>
              <Timeline className='time_line'>
                <Timeline.Item><a href="http://www.800bestex.com/">111百世快讯 | 关于异常天气导致快件延误告客户通知书！</a>  </Timeline.Item>
                <Timeline.Item>百世快讯 | 关于异常天气导致快件延误告客户通知书！ </Timeline.Item>
                <Timeline.Item>
                  <p>222 2018/12/6 15:53:00</p>
                  <p>中国天气网讯 中央气象台12月6日继续发布寒潮蓝色预警：受强冷空气影响，预计6日至9日，气温先后下降6～8℃，其中，东北地区东南部、黄淮东部、江淮、江南中东部、华南、重庆以及贵州中南部等地气温下降8～10℃，局地降温10℃以上</p>
                </Timeline.Item>
                <Timeline.Item>
                  <p>333 Technical testing 1</p>
                  <p>Technical testing 2</p>
                  <p>Technical testing 3 2015-09-01</p>
                </Timeline.Item>
                <Timeline.Item>
                  <p>444 Technical testing 1</p>
                  <p>Technical testing 2</p>
                  <p>Technical testing 3 2015-09-01</p>
                </Timeline.Item>
                <Timeline.Item>
                  <p>555 Technical testing 1</p>
                  <p>Technical testing 2</p>
                  <p>Technical testing 3 2015-09-01</p>
                </Timeline.Item>
                <Timeline.Item>
                  <p>666 Technical testing 1</p>
                  <p>Technical testing 2</p>
                  <p>Technical testing 3 2015-09-01</p>
                </Timeline.Item>
                <Timeline.Item>
                  <p>777 Technical testing 1</p>
                  <p>Technical testing 2</p>
                  <p>Technical testing 3 2015-09-01</p>
                </Timeline.Item>
                <Timeline.Item>
                  <p>888 Technical testing 1</p>
                  <p>Technical testing 2</p>
                  <p>Technical testing 3 2015-09-01</p>
                </Timeline.Item>

                <Timeline.Item>
                  <p>999 Technical testing 1</p>
                  <p>Technical testing 2</p>
                  <p>Technical testing 3 2015-09-01</p>
                </Timeline.Item>
                <Timeline.Item>
                  <p>101010 Technical testing 1</p>
                  <p>Technical testing 2</p>
                  <p>Technical testing 3 2015-09-01</p>
                </Timeline.Item>
                <Timeline.Item>
                  <p>111111 Technical testing 1</p>
                  <p>Technical testing 2</p>
                  <p>Technical testing 3 2015-09-01</p>
                </Timeline.Item>
              </Timeline>
              <Pagination showQuickJumper defaultCurrent={1} defaultPageSize={1} total={12} onChange={this.onChange} className='fenye'/>
            </div>
        </div>
        <Footer />
      </div>
    )
  }
}

