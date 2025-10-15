import {Route,Routes} from 'react-router-dom'
import React from 'react'
import User from "./components/User"
import Navbar from './components/Navbar'
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Services from "./Pages/Services"
const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" Component={Home}/>
      <Route path="/about" Component={About}/>
      <Route path="/contact" Component={Contact}/>
      <Route path="/services" Component={Services}/>
    </Routes>
    </>
  )
}
export default App