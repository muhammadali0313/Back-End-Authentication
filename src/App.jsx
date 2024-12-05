import React, { useState } from 'react'
import SignUp from '../src/signup'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes , Route, BrowserRouter} from 'react-router-dom'
import Login from './login';


const App = () => {

  return (
      <BrowserRouter>
      <Routes>
        <Route path='/register' element={<SignUp/>}></Route>
        <Route path='/login' element={<Login/>}></Route>

      </Routes>
      </BrowserRouter>
  )
}

export default App
