import Report from "@/components/Blogs/homepageSections/Report";
import MainBlogSection from "./homeComponents/MainBlogSection";
import BlogHeader from "./homeComponents/BlogHeader";
import Newsletter from "@/components/Blogs/homepageSections/NewsLetter";
import HorizontalCardSegment from "@/components/Blogs/homepageSections/HorizontalCards";
import VideoCardSegment from "@/components/Blogs/homepageSections/VideoCards";
import OverlappingCardSegment from "@/components/Blogs/homepageSections/OverlappingCards";

const BlogHomepage = () => {
    return (
        <div className="flex flex-col gap-14">
            <BlogHeader />
            <MainBlogSection />
            <Report />
            <HorizontalCardSegment />
            <VideoCardSegment />
            <OverlappingCardSegment />
            <Newsletter />
        </div>
    );
}

export default BlogHomepage;