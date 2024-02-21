import ArticleList from '@/components/Blogs/sectionshome/ArticlesList'
import Footer from '@/components/utils/Footer'
import Header from '@/components/utils/Header'
import React from 'react'

export const Articleslist = () => {
    return (
        <div>
            <Header />
            <ArticleList />
            <Footer />
        </div>
    )
}
export default Articleslist;