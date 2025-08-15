import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Insert from './pages/insert';
import Display from './pages/display';
import Update from './pages/update';
import './style1.css'
import InsertProduct from './pages/insertProduct';
import DisplayProduct from './pages/displayProduct';
import UpdateProduct from './pages/updateProduct';
function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Display/>}></Route>
          <Route path='/insert' element={<Insert/>}></Route>
          <Route path='/update/:id' element={<Update/>}></Route>
          <Route path='/displayProduct' element={<DisplayProduct/>}></Route>
          <Route path='/insertProduct' element={<InsertProduct/>}></Route>
          <Route path='/displayProduct/updateProduct/:id' element={<UpdateProduct/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
