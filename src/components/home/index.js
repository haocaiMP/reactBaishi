import React, { Component } from 'react'

import Slide from '../Slide';
import Banner from '../Banner';
import Title from '../Title';
import Row from '../Row';
import News from '../News';
import Query from '../Query';
import Footer from '../Footer'
export default class Home extends Component {
  render() {
    return (
      <div style={{position:'relative',top:'-80px'}}>
        <header>
          <Slide />
          <Query />
        </header>
        <main className='main'>
          <Banner />
          <Title title='百世实验室'/>
          <Row />
          <Title title='最新发生的事'/>
          <News />
        </main>
        <Footer />
      </div>
    )
  }
}
