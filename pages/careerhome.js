import React from 'react'

import SegmentMainArticle from '@/components/Blogs/commonInSectionHomes/mainArticle';
import SegmentHeader from '@/components/Blogs/commonInSectionHomes/header';
import Newsletter from '@/components/Blogs/homepageSections/NewsLetter';
import Footer from '@/components/utils/Footer';
import Header from '@/components/utils/Header';
import HorizontalCardSegment from '@/components/Blogs/homepageSections/HorizontalCards';
import OverlappingCardSegment from '@/components/Blogs/homepageSections/OverlappingCards';
import VideoCardSegment from '@/components/Blogs/homepageSections/VideoCards';

export const Career = () => {
  return (
    <>
      <Header />
      <div div className="flex flex-col gap-14">
        <SegmentHeader title="Career Advice" />
        <SegmentMainArticle />
        <OverlappingCardSegment />
        <VideoCardSegment />
        <HorizontalCardSegment />
        <Newsletter />
      </div>
      <Footer />
    </>
  )
};

export default Career;
