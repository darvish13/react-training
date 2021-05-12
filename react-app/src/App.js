import logo from './logo.svg'
import './App.css'
import Header from './components/header/Header'

function App() {
  const name = 'Alireza'

  return (
    <div className='App'>
      <header className='App-header'>

        <Header title='React Training' />
        
        <img src={logo} className='App-logo' alt='logo' />

        <Header title='Line 1' />

        <h1>{name}</h1>

        <Header title='Some Title' />
      </header>
    </div>
  )
}

export default App
