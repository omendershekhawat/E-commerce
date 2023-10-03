import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import ShowData from './components/ShowData'
import AddProduct from './components/AddProduct'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<ShowData/>} />
          <Route path='/add-product' element={<AddProduct/>} />
          <Route path='/edit' element={<h1>Edit Product</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
