import React, { Component } from 'react'
import { HashRouter as Router, Link, Switch, Route } from 'react-router-dom'
// import Child from './Child';
import Home from './home';
import Mailing from './mailing';
import Check from './check';
import Dot from './dot';
import Help from './help';
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
    let hash = window.location.hash;
    let dom = document.querySelector('.nav').querySelectorAll('li');
    
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
      let hash = window.location.hash;
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
              <Route path='/chajian' component={Check} />
              <Route path='/wangdian' component={Dot} />
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
