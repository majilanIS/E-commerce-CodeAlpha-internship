import React from 'react'
import classes from './Admin.module.css'
import Sidebar from '../../components/sidebar/Sidebar'
import { Routes, Route } from 'react-router-dom'
import AddProduct from '../../components/addProduct/AddProduct'
import ListProduct from '../../components/listProduct/ListProduct'

const Admin = () => {
  return (
    <div className={classes.admin}>
      {/* Assuming Sidebar uses a class like 'sidebar' internally or you can style it directly */}
      <Sidebar /> 
      
      {/* Add a wrapper for the content area */}
      <div className={classes['routes-container']}> 
        <Routes>
          {/* NOTE: You should use 'path' instead of 'to' in the Route component */}
          <Route path='/addproduct' element={<AddProduct />} />
          <Route path='/listProduct' element={<ListProduct />} />
        </Routes>
      </div>
    </div>
  )
}

export default Admin