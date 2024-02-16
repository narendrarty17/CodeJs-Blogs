import React from 'react'

export const SegmentMainArticle = () => {
    return (
        <div className='flex flex-col md:flex-row gap-8 md:gap-16 justify-start items-center px-6 md:px-20'>
            <div className='max-w-lg'>
                <img
                    className="w-full h-64 object-cover"
                    src="/images/blogIcon.png"
                />
            </div>
            <div className='flex flex-col gap-2 max-w-md md:w-2/3'>
                <h3 className="text-2xl pb-2">10 Benefits of Management and Leadership Developement</h3>
                <p className="text-gray-300 pb-4">Don't miss the 10 business benefits of doing a management program.</p>
                <button className="text-lg bg-blue-500 text-white py-3 px-3 w-36 rounded-full">
                    Read me
                </button>
            </div>
        </div>
    )
};

export default SegmentMainArticle;
