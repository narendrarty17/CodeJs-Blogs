import React from 'react'

export const OverlappingCard = () => {
    return (
        <div className="relative inline-block w-[300px] md:w-[320px] 2xl:w-[400px] h-[180px] md:h-[180px] 2xl:h-[225px] mb-14">
            <img
                className="w-[300px] md:w-[300px] 2xl:w-[400px] h-[180px] md:h-[180px] 2xl:h-[225px]"
                src="/images/blogIcon.png"
            />
            <div className="absolute right-[-20px] mt-[-100px] ml-[12px] bg-gray-700 p-4 rounded">
                <div className="flex flex-col gap-1">
                    <div className="text-md text-gray-400">Category</div>
                    <div className="text-lg text-white">Understanding React Js: An Introduction one more line</div>
                    <div className="flex flex-row items-center gap-6 mt-3 text-gray-300">
                        <h1 className='pb-1'>Read More</h1>
                        <img
                            className='w-5'
                            src="/images/blogs/bloghomepage/readMoreArrow.svg"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default OverlappingCard;
