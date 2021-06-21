import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import logo from '../../logo.svg'

const Home = () => {
  const name = 'Alireza'

  return (
    <>
      <div className='App'>
        <header className='App-header'>
          <Header title='React Training' />

          <img src={logo} className='App-logo' alt='logo' />

          <Header title='Line 1' />

          <h1>{name}</h1>

          <Header title='Some Title' />
        </header>
        <Footer />
      </div>
    </>
  )
}

export default Home
