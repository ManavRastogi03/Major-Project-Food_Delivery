import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import logo from "../../Images/logo.png"


function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
    <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to="/" className="flex items-center">
                <img
                  src={logo} 
                    className="mr-14 h-14 w-35"
                    alt="Logo"
                />
            </Link>
            <div className="flex items-center lg:order-2">
            <Link
                    to="/Login"
                    className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                >
                    Log In
                </Link>
                <Link
                    to="/SignUp"
                    className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                >
                    Sign Up
                </Link>
            </div>
            <div
                className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                id="mobile-menu-2"
            >
           
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <NavLink
                            to="/" 

                            className={({isActive}) =>
                                `block py-2 pr-4 pl-3 duration-200 ${ isActive ? "text-red-700": "text-slate-700" } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-red-700 lg:p-0`
                            }
                        >
                            Home
                        </NavLink>
                    </li>            

                    <li>
                    <NavLink 
                    to="/about"

                        className={({isActive})=>
                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-red-700 ": "text-slate-700"}  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:p-0`
                        }
                    >
                            About
                    </NavLink>

                    </li>
                    <li>
                        <NavLink
                            to="/contact" 

                            className={({isActive}) =>
                                `block py-2 pr-4 pl-3 duration-200 ${ isActive ? "text-red-700": "text-slate-700" } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-red-700 lg:p-0`
                            }
                        >
                            Contact
                        </NavLink>
                    </li> 
                    <li>
                        <NavLink
                            to="/Cart" 

                            className={({isActive}) =>
                                `block py-2 pr-4 pl-3 duration-200 ${ isActive ? "text-red-700": "text-slate-700" } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-red-700 lg:p-0`
                            }

                        >
                        <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        </NavLink>
                    </li> 
                </ul>

            </div>
        </div>
    </nav>
</header>
)
}
export default Header