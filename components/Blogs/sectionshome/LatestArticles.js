import React from 'react'

export const LatestArticles = () => {
    return (
        <div className='flex justify-center md:w-[75%] text-white'>
            <div className='flex flex-col gap-8 items-start'>
                <h1 className="text-3xl">Latest Articles in <i>Career Advice</i></h1>
                <ul className='flex flex-col gap-5 px-2 md:px-4'>
                    <li>
                        <div className="mb-1 text-gray-400">
                            Programming | Business
                        </div>
                        <h3 className="text-xl pb-2">
                            Understanding React JS: An Introduction to React JS
                        </h3>
                    </li>
                    <li>
                        <div className="mb-1 text-gray-400">
                            Programming | Business
                        </div>
                        <h3 className="text-xl pb-2">
                            Understanding React JS: An Introduction
                        </h3>
                    </li>
                    <li>
                        <div className="mb-1 text-gray-400">
                            Programming | Business
                        </div>
                        <h3 className="text-xl pb-2">
                            Understanding React JS: An Introduction
                        </h3>
                    </li>
                    <li>
                        <div className="mb-1 text-gray-400">
                            Programming | Business
                        </div>
                        <h3 className="text-xl pb-2">
                            Understanding React JS: An Introduction
                        </h3>
                    </li>
                </ul>
            </div>
        </div>
    )
}
