import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Events from './pages/Events';
import About from './pages/About';
import Members from './pages/Members';


function App() {

  return (
    <div className="App">
      <BrowserRouter >
        <Routes >
          <Route index element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/events' element={<Events/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/members' element={<Members/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
