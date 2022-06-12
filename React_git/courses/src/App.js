import React from 'react'
import Courses from './components/Courses'
import Nav from './components/Nav'
import Home from './components/Home'
import AddUser from './components/AddUser'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import UserDetails from './components/UserDetails'
export default function App() {
  return (
    <main>
      <Router>
        <Nav />
        <section className='Container'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Courses' element={<Courses/>}/>
            <Route path='/adduser' element={<AddUser/>}/>
            <Route path='/userdetails' element={<UserDetails/>}/>
            {/* <Route path='/Products/:id' element={<Products/>} /> */}
          </Routes>
        </section>
      </Router>
    </main>
  )
}
