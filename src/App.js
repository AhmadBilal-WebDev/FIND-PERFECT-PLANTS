import React from 'react'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Career from './components/Career'
import ContactUs from './components/ContactUs'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import PrivacyPolicy from './components/Privacy'
import ReturnPolicy from './components/ReturnPolicy'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Home/>}/>
      <Route path='/Career' element={<Career/>}/>
      <Route path='/About' element={<AboutUs/>}/>
      <Route path='/Contact' element={<ContactUs/>}/>
      <Route path='/Privacy' element={<PrivacyPolicy/>}/>
      <Route path='/Return Policy' element={<ReturnPolicy/>}/>
    </Route>
  )
)
const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App