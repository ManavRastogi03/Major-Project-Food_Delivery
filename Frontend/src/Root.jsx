import React from 'react'
import Header from './components/Header/Nav'
import Footer from './components/Footer/Footer'
import { Outlet,useLocation } from 'react-router-dom'
function Root() {
    const location = useLocation();
    const isSignUpPage = location.pathname.includes('SignUp');
    const isLoginPage = location.pathname.includes('Login');
    const shouldShowHeaderAndFooter=!isSignUpPage && !isLoginPage
  return (
    <>
    {shouldShowHeaderAndFooter && <Header/>}
          <Outlet/> 
    {shouldShowHeaderAndFooter && <Footer/>}
    </>
  )
}

export default Root