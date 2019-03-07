import React, { Component } from 'react';

// import Home from './components/home'
import NavBar from './components/NavBar'
// import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
// import { BrowserRouter as Router} from 'react-router-dom'
import 'echarts/lib/component/title';
import './App.css';
import ServImg from './assets/img/onlineSevice.png'
class App extends Component {
  constructor(p) {
    super(p);
    this.state = {
      active: true
    }
  }
  componentDidMount() {
    if(window.location.pathname !== '/') {
      
    }
    // var myChart = echarts.init(document.getElementById('chart'));
    // myChart.setOption({
    //   title: {text: '商品展示'},
    //   tooltip: {},
    //   xAxis: {
    //     data: ['衬衫','羊毛衫','短袖','裤子']
    //   },
    //   yAxis: {},
    //   series: [{
    //     name: '销量',
    //     type: 'pie',
    //     radius: [0, '50%'],
    //     data: [
    //       {name: 'aaa', value: 123},
    //       {name: 'bbb', value: 234},
    //       {name: 'ccc', value: 345}
    //     ]
    //     // data: [5, 10, 50, 30]
    //   }]
    // })
  }
  render() {
    return (
      <div>
        <div className="App">
          <NavBar />
          {/* <header className="App-header"> */}
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            {/* <div ref={chart => this.chart = chart} id="chart" style={{width:370, height:375}}></div>
          </header> */}
        </div>
        <img src={ServImg} alt="" className='serv_img' style={this.state.active ? {top: '295px'} : {top:'220px'}}/>
      </div>
      
    );
  }
}

export default App;
