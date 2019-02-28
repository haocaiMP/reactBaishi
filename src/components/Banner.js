import React, { Component } from 'react'
import './banner.css'
export default class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          id: 1,
          bg: require('../assets/img/u1.png'),
          hover: false,
          src: require('../assets/img/i1.png'),
          title: '寄件下单'
        },
        {
          id: 2,
          bg: require('../assets/img/u2.png'),
          hover: false,
          src: require('../assets/img/i2.png'),
          title: '网点查询'
        },
        {
          id: 3,
          bg: require('../assets/img/u3.png'),
          hover: false,
          src: require('../assets/img/i3.png'),
          title: '产品服务'
        },
        {
          id: 4,
          bg: require('../assets/img/u4.png'),
          hover: false,
          src: require('../assets/img/i4.png'),
          title: '客服咨询'
        }
      ]
    };
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }
  componentDidMount() {
    // console.log(this.shufferArr());
    // const arr = [
    //   {id: '0',parentId:null},
    //   {id: '1',parentId:'0'},
    //   {id: '2',parentId:'0'},
    //   {id: '3',parentId:'1'},
    //   {id: '4',parentId:'3'},
    //   {id: '5',parentId:'4'}];
    //   let aa = this.arrToTree(arr);
    //   console.log(aa,'22')
  }
  shufferArr() {
    const arr = [
      {id: '0',parentId:null},
      {id: '1',parentId:'0'},
      {id: '2',parentId:'0'},
      {id: '3',parentId:'1'},
      {id: '4',parentId:'3'},
      {id: '5',parentId:'4'}];
    let tree = {}
    for(let i=0,len=arr.length; i<len; i++) {
      let o = arr[i].id;
      arr[i].children = []
      for(let j=0,len=arr.length; j<len; j++) {
        if(arr[j].parentId) {
          if(arr[j].parentId === o) {
            arr[i].children.push(arr[j])
          }
        } else {
          tree[0] = arr[j]
        }
      }
    }
    return tree
  }
  arrToTree (arr) {
    function Node(id) {
        this.id = id
        this.pid = null
        this.childrens = []
    }
    
    let nodes = []
    let tree = {}
    for(let i=0;i<arr.length;i++) {
        let nowNode = arr[i]
        let node = new Node(nowNode.id)
        node.pid = node.parentId
        nodes.push(nowNode)
    }
    for(let i=0;i<nodes.length;i++) {
        let node = nodes[i]
        node.childrens = []
        for(let j=0;j<nodes.length;j++) {
            if(nodes[j].parentId) {
                if(nodes[j].parentId === node.id) {
                    node.childrens.push(nodes[j])
                }
            }else{
                tree[0] = nodes[j]
            }
        }
    }
    return tree
  }
  onMouseEnter(index) {
    console.log(index)
    let list = [...this.state.list]
    list[index].hover = true
    this.setState({
      list: list
    })
  }
  onMouseLeave(index){
    let list = [...this.state.list]
    list[index].hover = false
    this.setState({
      list: list
    })
  }

  render() {
    const { list } = this.state;
    return (
      <div className='banner'>
      {
        list.map((item,index) => {
          return (
            <div key={item.id} className='banner_li' onMouseEnter={this.onMouseEnter.bind(this,index)}
            onMouseLeave={this.onMouseLeave.bind(this,index)}>
              <div 
                  className={item.hover? 'li_bg active': 'li_bg'} 
                  style={{backgroundImage: `url(${item.bg})`}} 
                  >
              </div>
              <div className='li_title'>{item.title}</div>
              <img className={item.hover? 'li_img act': 'li_img'} src={item.src} alt=""/>
            </div>
          )
        })
      }
      </div>
    )
  }
}
