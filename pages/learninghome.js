import React from 'react'

import SegmentMainArticle from '@/components/Blogs/sectionshome/mainArticle';
import SegmentHeader from '@/components/Blogs/sectionshome/header';
import Newsletter from '@/components/Blogs/homepageSections/NewsLetter';
import Footer from '@/components/utils/Footer';
import Header from '@/components/utils/Header';
import OverlappingCardSegment from '@/components/Blogs/homepageSections/OverlappingCards';

export const LearningHome = () => {
    return (
        <>
            <Header />
            <div div className="flex flex-col gap-14">
                <SegmentHeader title="Career Advice" />
                <SegmentMainArticle />
                <OverlappingCardSegment type="home" />
                <Newsletter />
            </div>
            <Footer />
        </>
    )
};

export default LearningHome;
