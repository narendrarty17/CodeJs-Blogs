import React from 'react'

import SegmentMainArticle from '@/components/Blogs/sectionshome/mainArticle';
import SegmentHeader from '@/components/Blogs/sectionshome/header';
import Newsletter from '@/components/Blogs/homepageSections/NewsLetter';
import Footer from '@/components/utils/Footer';
import Header from '@/components/utils/Header';
import HorizontalCardSegment from '@/components/Blogs/homepageSections/HorizontalCards';

export const CareerHome = () => {
  return (
    <>
      <Header />
      <div div className="flex flex-col gap-14">
        <SegmentHeader title="Career Advice" />
        <SegmentMainArticle type="careerAdvice" id={0} />
        <HorizontalCardSegment type="home" />
        <Newsletter />
      </div>
      <Footer />
    </>
  )
};

export default CareerHome;
