import { useContext } from "react";

import IsSmallScreenContext from "./IsSmallScreenContext";
import suggestedReadData from '@/public/data/blogs/suggestedReadData';

const SuggestedReads = () => {
    const isSmallScreen = useContext(IsSmallScreenContext);
    const limitedSuggestedReads = suggestedReadData.slice(0, isSmallScreen ? 3 : suggestedReadData.length);

    return (
        limitedSuggestedReads.map((read) => (
            <li key={read.id} className="flex items-start mb-4 mr-4 w-[350px] lg:w-auto lg:mb-4 lg:mr-0">
                {/* Suggested Read Image (Left) */}
                <div className="pr-4">
                    <img
                        className="w-[100px] h-[80px] object-cover rounded"
                        src={read.imageSrc}
                        alt="Suggested Read" />
                </div>

                {/* Suggested Read Content (Right) */}
                <div className="w-2/3">
                    {/* Suggested Read Header */}
                    <div className="flex items-center mb-1">
                        {/* Author Image */}
                        <img
                            src={read.authorSrc}
                            alt="Author"
                            className="w-6 h-6 rounded-full mr-2"
                        />

                        {/* Author Name */}
                        <span className="text-[12px]">{read.authorName}</span>
                    </div>

                    {/* Suggested Read Title */}
                    <h2 className="text-[12px] font-bold mb-2">{read.readTitle}</h2>
                </div>
            </li>
        ))
    )
};

export default SuggestedReads;