import React, { Component } from 'react'
import Header from '../Header';
import bgImg from '../../assets/img/site-inner-bg.jpg';
import Footer from '../Footer'
import echarts from 'echarts';
// import 'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/map/js/china';
import geoJson from 'echarts/map/json/china.json';


export default class index extends Component {
  componentDidMount() {
    // console.log(echarts)
    var myChart = echarts.init(document.getElementById('china-map'));
    
    const option = {
      title : {
          text: '全国网点',
          subtext: '纯属娱乐',
          left: 'center'
      },
      tooltip : {
          trigger: 'item'
      },
      legend: {
          orient: 'vertical',
          left: 'left',
          data:[{
            name: '网点',
            icon: 'circle'
          }]
      },
      // visualMap: {
      //     min: 0,
      //     max: 2500,
      //     left: 'left',
      //     top: 'bottom',
      //     text:['高','低'],           // 文本，默认为数值文本
      //     calculable : true
      // },
      // toolbox: {                     //工具栏
      //     show: true,
      //     orient : 'vertical',
      //     left: 'right',
      //     top: 'center',
      //     feature : {
      //         mark : {show: true},
      //         dataView : {show: true, readOnly: false},
      //         restore : {show: true},
      //         saveAsImage : {show: true}
      //     }
      // },
      series : [
          {
              name: '网点',
              type: 'map',
              mapType: 'china',
              roam: false,    // 鼠标缩放能力
              mapLocation: {
                x: 'left',
              },
              geo: {
                map: 'china',
                label: {
                    emphasis: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        areaColor: '#323c48',
                        borderColor: '#111'
                    },
                    emphasis: {
                        areaColor: '#2a333d'
                    }
                }
              },
              selectedMode: 'multiple',
              itemStyle: {
                areaColor: '#fff'
              },
              label: {
                normal: {
                  position: [0,0],
                  show: true,
                  color: '#0085ff',
                },
                emphasis: {
                    show: true
                }
              },
              emphasis: {
                itemStyle: {
                  areaColor: 'lightblue'
                }
              },
              showLegendSymbol: false,
              markPoint: {
                symbol: 'circle'
              },
              data:[
                  {name: '北京',value: Math.round(Math.random()*1000)},
                  {name: '天津',value: Math.round(Math.random()*1000)},
                  {name: '上海',value: Math.round(Math.random()*1000),selected: true},
                  {name: '重庆',value: Math.round(Math.random()*1000)},
                  {name: '河北',value: Math.round(Math.random()*1000)},
                  {name: '河南',value: Math.round(Math.random()*1000)},
                  {name: '云南',value: Math.round(Math.random()*1000)},
                  {name: '辽宁',value: Math.round(Math.random()*1000)},
                  {name: '黑龙江',value: Math.round(Math.random()*1000)},
                  {name: '湖南',value: Math.round(Math.random()*1000)},
                  {name: '安徽',value: Math.round(Math.random()*1000)},
                  {name: '山东',value: Math.round(Math.random()*1000)},
                  {name: '新疆',value: Math.round(Math.random()*1000)},
                  {name: '江苏',value: Math.round(Math.random()*1000)},
                  {name: '浙江',value: Math.round(Math.random()*1000)},
                  {name: '江西',value: Math.round(Math.random()*1000)},
                  {name: '湖北',value: Math.round(Math.random()*1000)},
                  {name: '广西',value: Math.round(Math.random()*1000)},
                  {name: '甘肃',value: Math.round(Math.random()*1000)},
                  {name: '山西',value: Math.round(Math.random()*1000)},
                  {name: '内蒙古',value: Math.round(Math.random()*1000)},
                  {name: '陕西',value: Math.round(Math.random()*1000)},
                  {name: '吉林',value: Math.round(Math.random()*1000)},
                  {name: '福建',value: Math.round(Math.random()*1000)},
                  {name: '贵州',value: Math.round(Math.random()*1000)},
                  {name: '广东',value: Math.round(Math.random()*1000)},
                  {name: '青海',value: Math.round(Math.random()*1000),label:{position: [0,0]}},
                  {name: '西藏',value: Math.round(Math.random()*1000)},
                  {name: '四川',value: Math.round(Math.random()*1000)},
                  {name: '宁夏',value: Math.round(Math.random()*1000)},
                  {name: '海南',value: Math.round(Math.random()*1000)},
                  {name: '台湾',value: Math.round(Math.random()*1000)},
                  {name: '香港',value: Math.round(Math.random()*1000)},
                  {name: '澳门',value: Math.round(Math.random()*1000)}
              ]
          }
      ]
    };
    myChart.setOption(option, true);
    // myChart.on('mouseover', function (params) {
    //     console.log(params);
    // });
  }
  render() {
    return (
      <div style={{position:'relative',top:'-80px',backgroundColor: '#f7f7f7'}}>
        <Header bgImg={bgImg}/>
        <div id="china-map" ref={chart => this.chart = chart} style={{width:980, height:800,margin: '0 auto', marginTop: '20px'}}></div>
        <Footer />
      </div>
    )
  }
}
