import React, { Component } from 'react'
import './slide.css'
export default class Slide extends Component {
  constructor(){
    super()
    this.state = {
      arr:[0,1,2,3],
      index: 0
    }
    this.onClick = this.onClick.bind(this);
  }
  componentDidMount() {
    this.autoplay()
  }
  autoplay = () => {
    this.timer = setInterval(()=>{
      // let i = this.state.index;
      // i++;
      if(this.state.index>=3) {
        this.setState({
          index: 0
        })
      } else {
        this.setState({
          index: this.state.index+1
        })
      }
    }, 3500)
  }
  onClick = (i) => {
    // let li = this.ol.querySelectorAll('li');
    // let index = Array.prototype.indexOf.call(li,e.target);
    this.setState({
      index: i
    })
  }
  componentWillUnmount() {
    clearInterval(this.timer)
    // this.setState = (state, callback) => {
    //   return;
    // };
  }
  render() {
    const { index, arr } = this.state;
    return (
      <div className='slidebox'>
        <ul>
          {
            arr.map((item,i)=>{
              return (<li key={i} className={index === item ? 'active' : ''}></li>)
            })
          }
        </ul>
         <ol> {/*onClick={this.onClick} ref={ol => this.ol = ol} */}
          {
            arr.map((item,i)=>{
              return (<li onClick={this.onClick.bind(this,i)} key={i} className={index === item ? 'red' : 'white'}></li>)
            })
          }
        </ol>
      </div>
    )
  }
}
