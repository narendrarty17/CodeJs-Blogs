import NextImage from 'next/image'

const Image = (props) => {
    return (
        <NextImage
            className={props.className}
            src={props.src}
            alt="Picture of the author"
            width={props.width}
            height={props.width}
        />
    );
}