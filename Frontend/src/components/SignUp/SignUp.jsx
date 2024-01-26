import React from 'react'
import logo from "../../Images/Logo.png"
 import {Link,NavLink} from "react-router-dom"
function SignUp() {
  return (
    <>
      
        <div class="bg-grey-lighter min-h-screen flex flex-col">
                    <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="logo-container">
            <img src={logo} alt="Logo"   
             className="mr-14 h-14 w-35"
             />
            <h1 className="site-name">Express Ets</h1>
        </div>
                    
                        <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">

                            <h1 class="mb-8 text-3xl text-center">Sign up</h1>
                            <input 
                                type="text"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="fullname"
                                placeholder="Full Name" />

                            <input 
                                type="text"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="email"
                                placeholder="Email" />

                            <input 
                                type="password"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="password"
                                placeholder="Password" />
                            <input 
                                type="password"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="confirm_password"
                                placeholder="Confirm Password" />

                            <button
                                type="submit"
                                class="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1"
                            >Create Account</button>

                            <div class="text-center text-sm text-grey-dark mt-4">
                                By signing up, you agree to the 
                                <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                    Terms of Service
                                </a> and 
                                <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                    Privacy Policy
                                </a>
                            </div>
                        </div>

                        <div class="text-grey-dark mt-3 mb-4">
                            Already have an account? 
                            <NavLink class="no-underline border-b border-blue text-blue " to="../login/">
                                Log in
                            </NavLink>.
                    </div>
                </div>
            </div>
    </>
  )
}

export default SignUp