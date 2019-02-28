import React, { Component } from 'react';

import NavBar from './components/NavBar';
import Slide from './components/Slide';
import Banner from './components/Banner';
import Title from './components/Title';
import Row from './components/Row';
import News from './components/News';
// import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
import { BrowserRouter as Router} from 'react-router-dom'
import 'echarts/lib/component/title';
import FootImg from './assets/img/footer.png'
import FootBg from './assets/img/footerBg.jpg'
import './App.css';
const style = {
  footer: {
    display: 'block',
    width: '100%',
    background: `url(${FootBg})`,
    height: '306px',
    position: 'relative',
    top: '530px'
  },
  img: {
    display: 'block',
    height: '306px',
    width: '990px',
    margin: '0 auto'
  }
}
const Footer = () => {
  return (
    <div style={style.footer}>
      <img src={FootImg} alt="" style={style.img}/>
    </div>
  )
  
}
class App extends Component {
  // componentDidMount() {
  //   var myChart = echarts.init(document.getElementById('chart'));
  //   myChart.setOption({
  //     title: {text: '商品展示'},
  //     tooltip: {},
  //     xAxis: {
  //       data: ['衬衫','羊毛衫','短袖','裤子']
  //     },
  //     yAxis: {},
  //     series: [{
  //       name: '销量',
  //       type: 'pie',
  //       radius: [0, '50%'],
  //       data: [
  //         {name: 'aaa', value: 123},
  //         {name: 'bbb', value: 234},
  //         {name: 'ccc', value: 345}
  //       ]
  //       // data: [5, 10, 50, 30]
  //     }]
  //   })
  // }
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Slide />
          <main className='main'>
            <Banner />
            <Title title='百世实验室'/>
            <Row />
            <Title title='最新发生的事'/>
            <News />
          </main>
          <Footer />
          {/* <header className="App-header"> */}
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            {/* <div ref={chart => this.chart = chart} id="chart" style={{width:370, height:375}}></div>
          </header> */}
        </div>
      </Router>
    );
  }
}

export default App;
