import React, { Component } from 'react';

// import Home from './components/home'
import NavBar from './components/NavBar'
// import echarts from 'echarts/lib/echarts';
// import 'echarts/lib/chart/pie';
// import 'echarts/lib/component/tooltip';
// import 'echarts/lib/component/title';
import './App.css';
import 'antd/dist/antd.css';
import ServImg from './assets/img/onlineSevice.png'
import { connect } from 'react-redux';
class App extends Component {

  componentDidMount() {
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
  go = () => {
    window.open('https://webcs.800best.com/index.html', 'webcs', 'width=750,height=600,toolbar=no, menubar=no, scrollbars=no, resizable=yes,location=no, status=no,center=yes');
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
        <img src={ServImg} alt="" className='serv_img' style={this.props.style_img} onClick={this.go}/>
      </div>
      
    );
  }
}
const mapStateToProps = (store) => {
  return {
    style_img: store.routes
  }
};

// 发送行为,会在props中拿到
const mapDispatchToProps = (dispatch) => {
  return {
      
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(App);;
