import Code from "./Code";
import ParseParagraph from "./ParseParagraph";

const SubSections = ({ id, type, subsections }) => {
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
                                {ParseParagraph(subsection.content)}
                            </p>
                        )
                    }
                    {
                        subsection.image && (<img
                            className='w-[100%] md:w-[70%] mx-auto mb-4 rounded-lg'
                            src={`/images/blogs/blogContent/${type}/${id}/${subsection.image}`}
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

export default SubSections;