import React from 'react'

function Sidebar({ onSectionSelect }) {
  return (
    <>
        <aside class="flex flex-col w-64 h-80 overflow-y-hidden px-5 py-8  bg-white border-r rtl:border-r-0 rtl:border-l ">
    <div class="flex flex-col justify-between flex-1 mt-6">
        <nav class="-mx-3 space-y-3 ">
            <a onClick={() => onSectionSelect('burger')} class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-green-100 dark:hover:bg-red-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
                <span class="mx-2 text-sm font-medium">Burger</span>
            </a>

            <a onClick={() => onSectionSelect('breakfast')}class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-red-100 dark:hover:bg-red-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>

                <span class="mx-2 text-sm font-medium">Breakfast</span>
            </a>

            <a onClick={() => onSectionSelect('dinner')} class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-red-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>

                <span class="mx-2 text-sm font-medium">Dinner</span>
            </a>

            <a onClick={() => onSectionSelect('lunch')} class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-red-100 dark:hover:bg-red-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>

                <span class="mx-2 text-sm font-medium">Lunch</span>
            </a>

            <a onClick={() => onSectionSelect('snacks')} class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-red-100 dark:hover:bg-red-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
                <span class="mx-2 text-sm font-medium">Snacks</span>
            </a> 

        </nav>

        <div>
            <div class="flex items-center justify-between">
                <h2 class="text-base font-semibold text-gray-800 dark:text-white">Projects</h2>

  
            </div>
        </div>
    </div>
</aside>
    </>
  )
}

export default Sidebar