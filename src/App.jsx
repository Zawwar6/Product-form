import React from 'react'
import { Routes, Route } from 'react-router-dom'

import ShowDetail from './pages/ShowDetail'
import ProductForm from './pages/ProductForm'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element ={<ProductForm/>} />
        <Route path="/show-detail" element={<ShowDetail />} />
      </Routes>
    </>
  )
}

export default App
