// BlogPage.js
import React, { useState, useEffect } from 'react';

import IsSmallScreenContext from './pageComponents/IsSmallScreenContext';

import Sidebar from './pageComponents/Sidebar';
import DocDisplay from './pageComponents/DocDisplay';

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
                <DocDisplay />
                {/* Sidebar (only visible on large screens) */}
                <Sidebar />
            </div>
        </IsSmallScreenContext.Provider>
    )
};

export default BlogPage;
