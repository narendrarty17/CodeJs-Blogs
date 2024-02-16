import BlogCardHorizontal from "./subHomeComponents/BlogCardHorizontal";

const Learning = () => {
    return (
        <div className="px-6 md:px-10 lg:px-20 flex flex-col itemx-center gap-8">
            <div className="flex gap-4 justify-center md:justify-start">
                <span className="bg-green-400 w-8 h-8 rounded-full" />
                <h1 className="text-2xl">Learning</h1>
            </div>
            <div className="flex flex-wrap flex-col gap-10 md:gap-12  items-center md:justify-between md:flex-row">
                <div className="relative inline-block bg-yellow-600 w-[300px] md:w-[320px] lg:w-[400px] h-[180px] md:h-[180px] lg:h-[225px] mb-14">
                    <img
                        className="w-[300px] md:w-[300px] lg:w-[400px] h-[180px] md:h-[180px] lg:h-[225px]"
                        src="/images/blogIcon.png"
                    />
                    <div className="absolute right-[-20px] mt-[-100px] ml-[12px] bg-gray-700 p-4 rounded">
                        <div className="flex flex-col gap-1">
                            <div className="text-md text-gray-400">Category</div>
                            <div className="text-lg text-white">Understanding React Js: An Introduction one more line</div>
                            <div className="mt-3 text-gray-300">
                                <h1>Read More</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative inline-block bg-yellow-600 w-[300px] md:w-[320px] lg:w-[400px] h-[180px] md:h-[180px] lg:h-[225px] mb-14">
                    <img
                        className="w-[300px] md:w-[300px] lg:w-[400px] h-[180px] md:h-[180px] lg:h-[225px]"
                        src="/images/blogIcon.png"
                    />
                    <div className="absolute right-[-20px] mt-[-100px] ml-[12px] bg-gray-700 p-4 rounded">
                        <div className="flex flex-col gap-1">
                            <div className="text-md text-gray-400">Category</div>
                            <div className="text-lg text-white">Understanding React Js: An Introduction one more line</div>
                            <div className="mt-3 text-gray-300">
                                <h1>Read More</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative inline-block bg-yellow-600 w-[300px] md:w-[320px] lg:w-[400px] h-[180px] md:h-[180px] lg:h-[225px] mb-14">
                    <img
                        className="w-[300px] md:w-[300px] lg:w-[400px] h-[180px] md:h-[180px] lg:h-[225px]"
                        src="/images/blogIcon.png"
                    />
                    <div className="absolute right-[-20px] mt-[-100px] ml-[12px] bg-gray-700 p-4 rounded">
                        <div className="flex flex-col gap-1">
                            <div className="text-md text-gray-400">Category</div>
                            <div className="text-lg text-white">Understanding React Js: An Introduction one more line</div>
                            <div className="mt-3 text-gray-300">
                                <h1>Read More</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Learning;