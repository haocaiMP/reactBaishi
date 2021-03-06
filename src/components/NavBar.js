import React, { Component } from 'react'
import { HashRouter as Router, Link, Switch, Route } from 'react-router-dom'
// import Child from './Child';
import Home from './home';
import Mailing from './mailing';
import Check from './check';
import Dot from './dot';
import Help from './help';
import News from './news/index.js';
import Product from './product';
import Moment from 'moment';
import Logo from '../assets/img/logo.png';
import store from '../store';
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
      flag: false,
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
        link: '/company',
        hover: true
      },{
        id: 8,
        name: '帮助中心',
        link: '/help'
      }]
    }
  }
  componentDidMount() {
    let hash = window.location.hash;
    this.position(hash);
    let dom = document.querySelector('.nav').querySelectorAll('li');

    console.log(dom[1].offsetLeft)
    this.state.list.forEach((item) => {
      let link = `#${item.link}`;
      if(link === hash) {
        // console.log(dom[item.id - 1].offsetLeft)
        this.navLine.style.width = dom[item.id - 1].offsetWidth - 20 + 'px';
        this.navLine.style.left = dom[item.id - 1].offsetLeft + 446 + 'px';
        // this.navLine.style.left = this.refs.list1.offsetLeft + 10 + 'px';
      }
    })

    window.onhashchange = () => {
      let hash = window.location.hash;
      console.log(hash)
      this.position(hash)
    }
    // history.listen((route) => {
    //   console.log(route)
    //   if(route.pathname === '/') {
        
    //   }
    // })
    console.log(Moment().format('M,D,Y'))
  }
  position(hash) {
    switch (hash) {
      case '#/jijian':
        const action1 = {
          type: 'JIJIAN',
          value: {top: '210px'}
        }
        store.dispatch(action1);
        break;
      case '#/chajian':
        const action2 = {
          type: 'CHAJIAN',
          value: {transform: 'translateX(360%)',top: '250px'}
        }
        store.dispatch(action2);
        break;
      case '#/wangdian':
      case '#/news':
      case '#/product':
      case '#/help':
        const action3 = {
          type: 'JIJIAN',
          value: {display: 'none'}
        }
        store.dispatch(action3);
        break;
      default:
        const action = {
          type: 'HOME',
          value: {top: '290px'}
        }
        store.dispatch(action);
        break;
    }
  }
  onMouseEnter(i,e) {
    if(i === 6) {
      e.target.querySelector('.hover').style.display = 'block';
    }
    this.navLine.style.width = e.target.offsetWidth - 20 + 'px';
    this.navLine.style.left = e.target.offsetLeft + 446 + 'px';
  }
  onMouseLeave(i) {
    if(i === 6) {
      document.querySelector('.hover').style.display = 'none';
    }
    var hash = window.location.hash;
    var dom = document.querySelector('.nav').querySelectorAll('li');
    this.state.list.forEach((item) => {
      let link = `#${item.link}`;
      if(link === hash) {
        this.navLine.style.width = dom[item.id - 1].offsetWidth - 20 + 'px';
        this.navLine.style.left = dom[item.id - 1].offsetLeft + 446 + 'px';
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
                  return (
                    item.hover ? 
                    <li key={item.id} 
                      ref={`list${item.id}`}
                      onMouseEnter={this.onMouseEnter.bind(this,index)} 
                      onMouseLeave={this.onMouseLeave.bind(this,index)} className='li_hover'>
                      <Link disabled to={item.link} >{item.name}</Link> 
                      <div className='hover'>
                        <a href='http://www.800best.com/express/partner/' target="_blank" rel="noopener noreferrer">加盟合作</a>
                        <a href='http://www.800bestex.com/static/Index/70EBB44ADC5E52ED' target="_blank" rel="noopener noreferrer">采购招标</a>
                      </div>
                    </li> :
                    <li key={item.id} 
                      ref={`list${item.id}`}
                      onMouseEnter={this.onMouseEnter.bind(this,index)} 
                      onMouseLeave={this.onMouseLeave.bind(this,index)}>
                      <Link to={item.link} >{item.name}</Link> 
                      
                    </li>
                  ) 
                })
              }
              </ul>
            </div>
            
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/jijian' component={Mailing} />
              <Route path='/chajian' component={Check} />
              <Route path='/wangdian' component={Dot} />
              {/* <Route path='/company' render={()=>{
                window.open('http://www.800best.com/express/partner/')
              }} /> */}
              <Route path='/product' component={Product} />
              <Route path='/news' component={News} />
              <Route path='/help' component={Help} />

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
