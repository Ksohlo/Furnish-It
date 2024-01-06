import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/nav'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route element={<Home />} path='/' exact/>
        </Routes>
      </Router>
    </>
  )
}

export default App
