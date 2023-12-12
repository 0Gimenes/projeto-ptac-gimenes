import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './Home';
import Destaque from './destaque';
import Cadastra from './cadastra';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/cadastra' element={<Cadastra />}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/destaque' element={<Destaque />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)