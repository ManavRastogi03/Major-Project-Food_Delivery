import React, { useRef,useEffect } from 'react'
import Card from './Card'

function ProductListing({ selectedSection }) {
    const burgerSectionRef = useRef(null);
    const breakfastSectionRef = useRef(null);
    const lunchSectionRef = useRef(null);
    const dinnerSectionRef=useRef(null)
    const snacksSectionRef=useRef(null)

  
    useEffect(() => {
      // Use the selectedSection prop to determine which section to scroll to
      // and call the scrollIntoView method on its ref
      // This assumes selectedSection is a string like 'burger', 'breakfast', etc.
      if (selectedSection === 'burger') {
        burgerSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      } else if (selectedSection === 'breakfast') {
        breakfastSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }

      else if (selectedSection === 'dinner') {
        dinnerSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
      else if(selectedSection==='lunch'){
        lunchSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
      else{
        snacksSectionRef.current.scrollIntoView({behavior:'smooth'});
      }
      // ... (similar conditions for other sections)
    }, [selectedSection]);
    // At the beginning of your component or where you manage your data
    const BurgerItems = [
      { imageSrc: '../Images/Burger1.jpg', name: "Butter Chicken Grilled" },
      { imageSrc: "../Images/Burger2.png", name: "veg surprise burger" },
      { imageSrc: "../Images/Burger3.jpg", name: "Butter Chicken Grilled Burger" },
      // Add more items as needed
    ];
    const BreakfastItems=[
      {imageSrc:'../Images/Breakfast1.jpg',name:'Aloo Pratha'},
      {imageSrc:'../Images/Breakfast2.jpg',name:'Masala Dosa'},
      {imageSrc:'../Images/Breakfast3.jpg',name:'Missi Roti'},
    ];
    const DinnerItems=[
      {imageSrc:'',name:''},
      {imageSrc:'',name:''},
      {image:'',name:''},
    ]
    const LunchItems=[
      {imageSrc:'',name:''},
      {imageSrc:'',name:''},
      {imageSrc:'',name:''},
    ]
    const SnacksItems=[
      {imageSrc:'',name:''},
      {imageSrc:'',name:''},
      {imageSrc:'',name:''},
    ]

  
  return (
    <>
        <div class="bg-white ">
            <div class="container px-6 py-8 mx-auto">
                <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">ExpressEts</h1>

                <p class="max-w-2xl mx-auto mt-4 text-center text-gray-500 xl:mt-6">
                List of eateries providing online food delivery services in Noida.
                </p>
               
     
                <h2 ref={burgerSectionRef} className="text-3xl font-bold mt-6 mb-4 text-center text-gray-800">
                    Burger
                </h2>
                <div className="flex justify-between mt-6 space-x-6 xl:mt-12">
                  {BurgerItems.map((item, index) => (
                  <Card key={index} imageSrc={item.imageSrc} name={item.name} />
                  ))}
                </div>
                <h2 ref={breakfastSectionRef}  className="text-3xl font-bold mt-6 mb-4 text-center text-gray-800">
                    Breakfast
                </h2>
                <div className="flex justify-between mt-6 space-x-6 xl:mt-12">
                {BreakfastItems.map((item, index) => (
                  <Card key={index} imageSrc={item.imageSrc} name={item.name} />
                  ))}
                </div>

                <h2 ref={dinnerSectionRef}  className="text-3xl font-bold  mt-6 mb-4 text-center text-gray-800">
                    Dinner
                </h2>
                <div className="flex justify-between space-x-6 mt-6 xl:mt-12">
                {DinnerItems.map((item, index) => (
                  <Card key={index} imageSrc={item.imageSrc} name={item.name} />
                ))}
                </div>


                <h2 ref={lunchSectionRef} className="text-3xl font-bold mt-6 mb-4 text-center text-gray-800">
                    Lunch
                </h2>
                <div className="flex justify-between mt-6 space-x-6 xl:mt-12">
                {LunchItems.map((item, index) => (
                  <Card key={index} imageSrc={item.imageSrc} name={item.name} />
                ))}
                </div>
                <h2 ref={snacksSectionRef} className="text-3xl font-bold mt-6 mb-4 text-center text-gray-800">
                    snacks
                </h2>
                <div className="flex justify-between mt-6 space-x-6 xl:mt-12">
                {SnacksItems.map((item, index) => (
                  <Card key={index} imageSrc={item.imageSrc} name={item.name} />
                ))}
                </div>

                
            </div>
        </div>
    </>
  )
}

export default ProductListing