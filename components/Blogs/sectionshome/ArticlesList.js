import React from 'react';
import SegmentHeader from './header';
import { LatestArticles } from './LatestArticles';
import BlogHorizontalSmall from '../cards/BlogHorizontalSmall';
import { PopularArticles } from './PopularArticles';

const articles = [
    { id: 1, title: 'Article 1', author: 'Author 1', date: '2024-02-20', content: 'Content of Article 1...' },
    { id: 2, title: 'Article 2', author: 'Author 2', date: '2024-02-19', content: 'Content of Article 2...' },
    { id: 3, title: 'Article 3', author: 'Author 3', date: '2024-02-18', content: 'Content of Article 3...' },
    // Add more articles as needed
];

const ArticlesList = () => {
    return (
        <div>
            <SegmentHeader title="Latest Articles" />
            <div className='flex flex-col gap-12 w-full md:gap-20 my-12 md:flex-row justify-center px-8'>
                <LatestArticles />
                <PopularArticles />
            </div>
        </div>
    );
};

export default ArticlesList;
