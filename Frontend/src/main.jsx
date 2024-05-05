import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Root from './Root.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import SignUp from './components/SignUp/SignUp.jsx'
import Login from './components/LogIn/Login.jsx'
import Contact from './components/Contact/Contact.jsx'
import Cartsidebar from './components/Cart/Cartsidebar.jsx'
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root/>}>
      <Route path="" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="SignUp" element={<SignUp/>}/>
      <Route path='Login' element={<Login/>}/>
      <Route path='contact'element={<Contact/>}/>
      <Route path='Cart' element={<Cartsidebar/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
