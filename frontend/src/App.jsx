import React from 'react'
import { Routes, Route } from 'react-router'
import toast, { Toaster } from 'react-hot-toast';
import Home from './pages/Home'
import Interviews from './pages/Interviews'
import Login from './pages/Login'
import About from './pages/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <div className='mx-4 sm:mx-[7%]'>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/interviews' element={<Interviews />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
