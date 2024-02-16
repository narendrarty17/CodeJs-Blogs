import OverlappingCard from '@/components/Blogs/homeComponents/subHomeComponents/OverlappingCard';
import Footer from '@/components/utils/Footer';
import Header from '@/components/utils/Header';
import React from 'react'

export const Career = () => {
  return (
    <div div className="flex flex-col gap-14">
      <Header />
      <div className='flex flex-col md:flex-row gap-8 md:gap-16 justify-center items-center px-6 md:px-20'>
        <div className='max-w-md'>
          <img
            className="w-full h-64 object-cover"
            src="/images/blogIcon.png"
          />
        </div>
        <div className='flex flex-col gap-2 max-w-md md:w-1/2'>
          <h3 className="text-2xl pb-2">10 Benefits of Management and Leadership Developement</h3>
          <p className="text-gray-300 pb-4">Don't miss the 10 business benefits of doing a management program.</p>
          <button className="text-lg bg-blue-500 text-white py-3 px-3 w-36 rounded-full">
            Read me
          </button>
        </div>
      </div>
      <div className="px-6 md:px-8 lg:px-20 flex flex-col itemx-center gap-8">
        <div className="flex gap-4 justify-center md:justify-start">
          <span className="bg-green-400 w-8 h-8 rounded-full" />
          <h1 className="text-2xl">Learning</h1>
        </div>
        <div className="flex flex-wrap flex-col gap-10 mr-[10px] items-center md:justify-between md:flex-row">
          <OverlappingCard id={1} type="learning" />
          <OverlappingCard id={1} type="learning" />
          <OverlappingCard id={1} type="learning" />
        </div>
        <button className="mx-auto text-lg border-2 border-white text-white py-3 px-6 rounded-full">
          See More
        </button>
      </div>
      <Footer />
    </div>
  )
};

export default Career;
