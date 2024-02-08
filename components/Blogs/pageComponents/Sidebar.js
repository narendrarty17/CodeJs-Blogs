import SuggestedReads from "./SuggestedReads";

const Sidebar = () => {
    return (
        <div className="w-full lg:w-1/5 px-4 py-8">
            {/* Search Bar */}
            <div className="mb-6 hidden lg:block">
                {/* Add your search bar component here */}
                <input type="text" placeholder="Search..." className="w-full px-4 py-2 border border-gray-300 rounded-3xl" />
            </div>

            {/* Author Details */}
            <div className="mb-6 hidden lg:block">
                {/* Author Info */}
                <div className="flex items-center mb-4">
                    {/* Author Logo */}
                    <img src="/images/blogs/blogpage/authorLogo.png" alt="Author Logo" className="w-10 h-10 rounded-full mr-4" />
                    {/* Author Info */}
                    <div>
                        <h2 className="text-sm font-bold">Vishal Sharma</h2>
                        <p className="text-[12px] text-gray-500">267k followers</p>
                    </div>
                </div>

                {/* Short Paragraph about the Author */}
                <p className='text-[12px] text-gray-400'>
                    Lead UX Designer @ Slack. Loves travelling and lives for backstage action!
                    Love to design user centric products and understanding consumer behaviour
                </p>
            </div>

            {/* Suggested Reads */}
            <div>
                <h2 className="text-lg font-bold mb-4">Suggested Reads</h2>
                {/* Add your suggested reads links or components here */}
                <ul className="flex flex-wrap flex-row lg:flex-col">
                    <SuggestedReads />
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;