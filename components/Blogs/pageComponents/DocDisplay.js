// Import React
import React from 'react';
// Import the JSON data directly
import blogData from '@/blogData/blog_01.json'; // Corrected file extension to .json
import SocialMediaIcons from '../pageComponents/SocialMediaIcons';

function parseAndRenderParagraph(paragraph) {
    if (!paragraph) return null;
    // Regular expression to find the markdown-style links in the paragraph
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const italicRegex = /\*(.*?)\*/g; // Regular expression to find text surrounded by asterisks

    return paragraph.split(linkRegex).map((part, index) => {
        if (index % 3 === 0) {
            // Check for italicized text
            return part.split(italicRegex).map((text, i) => {
                if (i % 2 === 0) {
                    return text;
                } else {
                    return <em key={i}>{text}</em>;
                }
            });
        } else if (index % 3 === 1) {
            return (
                <a
                    key={index}
                    href={part}
                    className="text-gray-300 underline hover:text-blue-300 cursor-pointer"
                >
                    {part}
                </a>
            );
        } else {
            return null;
        }
    });
}


// Define the SubSections component
const SubSections = ({ subsections }) => {
    return (
        subsections.map((subsection, index) => {
            return (
                <div key={index} className="mb-8"> {/* Added key prop */}
                    <h3 className='text-gray-200 text-xl font-semibold mb-2'>
                        {subsection.heading} {/* Corrected 'header' to 'heading' */}
                    </h3>
                    {
                        subsection.content && (
                            <p className="text-gray-300 text-lg mb-4 leading-relaxed">
                                {parseAndRenderParagraph(subsection.content)}
                            </p>
                        )
                    }
                    {
                        subsection.image && (<img
                            className='w-[100%] md:w-[70%] mx-auto mb-4 rounded-lg'
                            src={subsection.image}
                            alt="cover image"
                        />)
                    }
                    {
                        subsection.code && (
                            <Code code={subsection.code} />
                        )
                    }
                </div>
            );
        })
    )
}

const Code = ({ code }) => {
    return (
        <div>
            <div className='rounded-t-md px-5 py-2 max-w-[768px] lg:max-w-[900px] bg-gray-700 text-gray-200 font-bold'>
                Code
            </div>
            <div className='rounded-b-md px-5 py-2 max-w-[768px] lg:max-w-[900px] text-white bg-gray-500'>
                {code}
            </div>
        </div>
    );
}

const Section = ({ key, section }) => {
    return (
        <section key={key} className="mb-12"> {/* Added key prop */}
            <h2 className="text-gray-200 text-2xl font-bold mb-4">
                {section.heading}
            </h2>
            {/* Render section content */}
            {section.content && (
                <p className="text-gray-300 text-lg mb-4 leading-relaxed">
                    {parseAndRenderParagraph(section.content)}
                </p>
            )}
            {/* Render section image */}
            {section.image && (
                <img
                    className='w-[100%] md:w-[70%] mx-auto mb-4 rounded-lg'
                    src={section.image}
                    alt="cover image"
                />
            )}
            {/* Render subsections if they exist */}
            {section.subsections && (
                <SubSections subsections={section.subsections} />
            )}
        </section>
    );
}

const AuthorInfoHeader = ({ author }) => {
    return (
        <div className="flex items-center justify-between mb-6">
            {/* Author Info */}
            <div className="flex items-center">
                <img src={author.image} alt="Author Logo" className="w-10 h-10 rounded-full mr-4" />
                <div>
                    <h2 className="text-sm font-bold">
                        {author.name}
                    </h2>
                    <p className="text-[12px] text-gray-500">
                        {author.publicationDate}
                    </p>
                </div>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center space-x-4">
                {/* Add your social media icons and links here */}
                <SocialMediaIcons links={author.socialMediaLinks} />
            </div>
        </div>
    );
}

// Define the DocDisplay component
const DocDisplay = () => {
    return (
        <div className="flex-1 border-r border-gray-800 px-4 py-8">
            <AuthorInfoHeader author={blogData.author} />
            <div className="font-roboto px-1 md:pl-4 mb-8">
                {/* Cover Image */}
                <img
                    className='w-full mb-4 rounded-lg'
                    src={blogData.coverImage}
                    alt="cover image"
                />
                {/* Main Heading */}
                <h1 className="text-gray-200 text-3xl font-bold mb-4">
                    {blogData.title}
                </h1>
                {/* Render the Body */}
                {blogData.content.map((section, index) => (
                    <Section
                        key={index}
                        section={section}
                    />
                ))}
            </div>
        </div>
    );
};

export default DocDisplay;