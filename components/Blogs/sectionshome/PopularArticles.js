import React from 'react'
import BlogHorizontalSmall from '../cards/BlogHorizontalSmall'

export const PopularArticles = () => {
    return (
        <div className='flex flex-col gap-8 items-start text-white'>
            <h1 className="text-3xl">Popular Articles</h1>
            <div className='h-[1px] bg-gray-300 mt-[-10px] mb-[5px] w-[80%]' />
            <div className='flex flex-col gap-5'>
                <BlogHorizontalSmall id={0} type="careerAdvice" />
                <BlogHorizontalSmall id={1} type="careerAdvice" />
                <BlogHorizontalSmall id={2} type="careerAdvice" />
                <BlogHorizontalSmall id={3} type="careerAdvice" />
                <BlogHorizontalSmall id={4} type="careerAdvice" />
            </div>
        </div>
    )
}
