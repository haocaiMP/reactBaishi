import React, { Component } from 'react'
import { HashRouter as Router, Link, Switch, Route } from 'react-router-dom'
// import Child from './Child';
import Home from './home';
import Mailing from './mailing';
import Moment from 'moment';
import Logo from '../assets/img/logo.png';
// import createHashHistory from 'history/createHashHistory';
import './navbar.css';
// const history = createHashHistory();
// const Title = ({match}) => {
//   return <div className='title'>{match.params.name}</div>
// };
class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // hover: false,
      list: [{
        id: 1,
        name: '首页',
        link: '/'
      },{
        id: 2,
        name: '查件',
        link: '/chajian'
      },{
        id: 3,
        name: '寄件',
        link: '/jijian'
      },{
        id: 4,
        name: '网点',
        link: '/wangdian'
      },{
        id: 5,
        name: '产品服务',
        link: '/product'
      },{
        id: 6,
        name: '新闻中心',
        link: '/news'
      },{
        id: 7,
        name: '企业服务',
        link: '/company'
      },{
        id: 8,
        name: '帮助中心',
        link: '/help'
      }]
    }
  }
  componentDidMount() {
    
    // console.log(window.location.pathname);
    var hash = window.location.hash;
    var dom = document.querySelector('.nav').querySelectorAll('li');
    
    this.state.list.forEach((item) => {
      let link = `#${item.link}`;
      if(link === hash) {
        console.log(dom[item.id - 1].offsetLeft)
        this.navLine.style.width = dom[item.id - 1].offsetWidth - 20 + 'px';
        this.navLine.style.left = dom[item.id - 1].offsetLeft + 195 + 'px';
        // this.navLine.style.left = this.refs.list1.offsetLeft + 10 + 'px';
      }
    })
    window.onhashchange = () => {
      // console.log(window.location)
    }
    // history.listen((route) => {
    //   console.log(route)
    //   if(route.pathname === '/') {
        
    //   }
    // })
    console.log(Moment().format('M,D,Y'))
  }
  onMouseEnter(i,e) {
    this.navLine.style.width = e.target.offsetWidth - 20 + 'px';
    this.navLine.style.left = e.target.offsetLeft + 195 + 'px';
  }
  onMouseLeave() {
    var hash = window.location.hash;
    var dom = document.querySelector('.nav').querySelectorAll('li');
    this.state.list.forEach((item) => {
      let link = `#${item.link}`;
      if(link === hash) {
        this.navLine.style.width = dom[item.id - 1].offsetWidth - 20 + 'px';
        this.navLine.style.left = dom[item.id - 1].offsetLeft + 195 + 'px';
      }
    })
  }

  render() {
    const { list } = this.state;
    return (
      // history={history}
      <Router >
        <div className='navbox'> 
            <div className='box'>
              <img src={Logo} alt="" className='logo'/>
              {/* className={!hover?'nav-line':'nav-line pingyi'} */}
              <div className='nav-line pingyi' ref={navLine => this.navLine = navLine} ></div>
              <ul className='nav'>
              {
                // to={`${item.link}/${item.name}`}
                list.map((item,index)=>{
                  return (<li key={item.id} 
                    ref={`list${item.id}`}
                    onMouseEnter={this.onMouseEnter.bind(this,index)} 
                    onMouseLeave={this.onMouseLeave.bind(this)}><Link to={item.link} >{item.name}</Link></li>)
                })
              }
              </ul>
            </div>
            
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/jijian' component={Mailing} />
              {/* {
                list.map((item,index) => {
                  return (
                    <Route key={item.id} path={`${item.link}/:name`} render={()=><Child name={item.name}/>}></Route>
                  )
                })
              } */}
              
            </Switch>
        </div>
      </Router>
    )
  }
}


export default NavBar;
