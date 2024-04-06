import React from 'react'
import {Route, Routes} from "react-router-dom"
import Login from '../Pages/Login'
import ProductPage from '../Pages/ProductPage'
function AllRoutes() {
  return (
    <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/' element={<ProductPage/>}></Route>
    </Routes>
  )
}

export default AllRoutes
