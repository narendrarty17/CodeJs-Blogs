import OverlappingCard from "@/components/Blogs/cards/OverlappingCard";

const OverlappingCardSegment = () => {
    return (
        <div className="px-6 md:px-8 lg:px-20 flex flex-col itemx-center gap-8">
            <div className="flex gap-4 justify-center md:justify-start">
                <span className="bg-green-400 w-8 h-8 rounded-full" />
                <h1 className="text-2xl">Learning</h1>
            </div>
            <div className="flex flex-wrap flex-col gap-10 mr-[10px] items-center md:justify-between md:flex-row">
                <OverlappingCard id={1} type="learning" />
                <OverlappingCard id={1} type="learning" />
                <OverlappingCard id={1} type="learning" />
            </div>
            <button className="mx-auto text-lg border-2 border-white text-white py-3 px-6 rounded-full">
                See More
            </button>
        </div>
    );
}

export default OverlappingCardSegment;