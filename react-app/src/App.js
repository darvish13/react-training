import './App.css'
import Routes from './components/Routes'
import { BrowserRouter as Router } from 'react-router-dom'
import TopMenu from './components/topmenu/Topmenu'

function App() {
  return (
    <>
      <Router>
        <TopMenu />

        <Routes />
      </Router>
    </>
  )
}

export default App
