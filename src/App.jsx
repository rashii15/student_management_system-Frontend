import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import Home from './pages/Home'
import { BrowserRouter as Router,Route, Routes} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/home" element = {<Home></Home>}></Route>
        {/* <Route path="/about" element = {<AboutUS></AboutUS>}></Route>
        <Route path="/service" element = {<Service></Service>}></Route> */}
      </Routes>
    
    </>
  )
}

export default App
