// BlogPage.js
import React, { useState, useEffect } from 'react';

import IsSmallScreenContext from './pageComponents/IsSmallScreenContext';
import SocialMediaIcons from './pageComponents/SocialMediaIcons';

import Blog_01 from './blogContent/blog_01_content';
import Sidebar from './pageComponents/Sidebar';

const BlogPage = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 1024);
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);

        console.log(isSmallScreen);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isSmallScreen]);

    return (
        <IsSmallScreenContext.Provider value={isSmallScreen} >
            <div className='flex flex-col lg:flex-row'>
                <div className="flex-1 border-r border-gray-800 px-4 py-8">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                        {/* Author Info */}
                        <div className="flex items-center">
                            <img src="/images/blogs/blogpage/authorLogo.png" alt="Author Logo" className="w-10 h-10 rounded-full mr-4" />
                            <div>
                                <h2 className="text-sm font-bold">Vishal Sharma</h2>
                                <p className="text-[12px] text-gray-500">5 July, 2023</p>
                            </div>
                        </div>

                        {/* Social Media Links */}
                        <div className="flex items-center space-x-4">
                            {/* Add your social media icons and links here */}
                            <SocialMediaIcons />
                        </div>
                    </div>

                    {/* Blog Content */}
                    <div className="mb-8">
                        <Blog_01 />
                    </div>
                </div>
                {/* Sidebar (only visible on large screens) */}
                <Sidebar />
            </div>
        </IsSmallScreenContext.Provider>
    )
};

export default BlogPage;
