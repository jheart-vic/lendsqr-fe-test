import React from 'react'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import './App.css'
import Login from './component/Login'
// import Navbar from './component/Navbar'

const  App = () => {
  return (
    <div className="App">
<Router>
    {/* <Navbar/> */}
<Routes>
 <Route path='/login' element={<Login />}/>
</Routes>
</Router>
    </div>
  )
}

export default App
