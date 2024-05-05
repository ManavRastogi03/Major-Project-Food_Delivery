import { useState } from 'react';
import React from 'react'
import Sidebar from '../HomeComponent/Sidebar'
import ProductListing from '../HomeComponent/ProductListing'

function Home() {
  const [selectedSection, setSelectedSection] = useState(null);
  const handleSectionSelect = (section) => {
    setSelectedSection(section);
  };
  
  return (
    <>
    <div className="flex">
        <Sidebar onSectionSelect={handleSectionSelect}/>
        <ProductListing  selectedSection={selectedSection}/>
    </div>
    </>
  )
}

export default Home;