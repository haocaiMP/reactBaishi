import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import Child from './Child';
import './navbar.css';
import Moment from 'moment';
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
        link: '/home'
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
    // console.log(this.refs.list1.offsetLeft);
    this.navLine.style.left = this.refs.list1.offsetLeft + 10 + 'px';
    console.log(Moment().format('M,D,Y'))
  }
  onMouseEnter(i,e) {
    // console.log(e.target.offsetWidth,i)
    this.navLine.style.width = e.target.offsetWidth - 20 + 'px';
    this.navLine.style.left = e.target.offsetLeft + 10 + 'px';
    // this.setState({
    //   hover: true
    // })
  }
  onMouseLeave() {
    this.navLine.style.width = this.refs.list1.offsetWidth - 20 + 'px';
    this.navLine.style.left = this.refs.list1.offsetLeft + 10 + 'px';
    // this.setState({
    //   hover: false
    // })
  }

  render() {
    const { list } = this.state;
    return (
      <Router>
        <div className='navbox'> 
          {/* className={!hover?'nav-line':'nav-line pingyi'} */}
          <div className='nav-line pingyi' ref={navLine => this.navLine = navLine} ></div>
          <ul className='nav'>
          {
            list.map((item,index)=>{
              return (<li key={item.id} 
                ref={`list${item.id}`} 
                onMouseEnter={this.onMouseEnter.bind(this,index)} 
                onMouseLeave={this.onMouseLeave.bind(this)}><Link to={`${item.link}/${item.name}`} >{item.name}</Link></li>)
            })
          }
          </ul>
          <Switch>
            {
              list.map((item,index) => {
                return (
                  <Route key={item.id} path={`${item.link}/:name`} render={()=><Child name={item.name}/>}></Route>
                )
              })
            }
            
          </Switch>
        </div>
      </Router>
    )
  }
}


export default NavBar;
