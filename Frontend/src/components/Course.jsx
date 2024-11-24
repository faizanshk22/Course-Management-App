import React from 'react'
import list from '../../public/list.json'
import Cards from './Cards'
// import { Link } from 'react-router-dom';

function Course() {
   const filterData = list.filter((data) => data.category === "Paid");

  return (
   <>
   <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
    <div className='mt-[12vh] items-center justify-center text-center'>
        <h1 className='text-2xl font-semibold md:text-3xl'>
           Welcome to paid courses with exceptional <span className='text-red-600 md:text-green-600'> super easy learning here :) </span>
        </h1>
        <p className='mt-12 text-start'>
        Explore a range of expertly crafted courses designed to make learning engaging and straightforward. Gain valuable skills at your own pace with comprehensive materials, clear instructions, and practical insights to help you succeed!        </p>
    {/* <Link to='/'>    
        <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-8'>Back</button>
    </Link> */}
    </div>
    <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
        {
            filterData.map((item) => (
            // list.map((item)=>(
                <Cards item={item} key={item.id} />
            ))
        }
        
    </div>
   </div>
   </>
  )
}

export default Course
