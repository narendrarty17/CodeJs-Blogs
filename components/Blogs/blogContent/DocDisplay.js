// Import React
import React from 'react';
// Import the JSON data directly
import blogData from '@/blogData/blog_01.json'; // Corrected file extension to .json

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
                                {subsection.content}
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
                    {section.content}
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

// Define the DocDisplay component
const DocDisplay = () => {
    return (
        <div className="font-roboto px-1 md:pl-4">
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
    );
};

export default DocDisplay;