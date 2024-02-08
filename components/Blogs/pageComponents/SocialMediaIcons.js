import socialMediaIconData from '@/public/data/blogs/socialMediaIcons';

const SocialMediaIcons = () => (
    socialMediaIconData.map((icon) => (
        <a key={icon.id} href="#" className="text-blue-500">
            <img
                className='w-4 h-4'
                src={icon.src}
                alt={icon.alt}
            />
        </a>
    ))
);

export default SocialMediaIcons;