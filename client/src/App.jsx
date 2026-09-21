import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Create from './components/Create';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Navbar />}></Route>
          <Route path='/Create' element={<Create />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
