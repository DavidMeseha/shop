import Image from "next/image";

const Banner = () => {
    return (
        <div style={{ position: 'relative', aspectRatio: 5, marginBottom: 20 }}>
            <Image src='/banner.jpg' fill='cover' alt='ads' priority sizes='(max-width: 768px) 100vw' />
        </div>
    )
};
export default Banner;