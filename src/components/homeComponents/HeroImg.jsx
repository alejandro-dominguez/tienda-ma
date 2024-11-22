import { useState } from 'react';
import heroBg from '../../assets/hero-img-desktop.jpg';

const HeroImg = () => {
    const [ isLoaded, setIsLoaded ] = useState(false)
    
    return (
        <>
            <div
                className={
                    !isLoaded ?
                        'block w-full h-[100svh] bg-teal-500/[2.5%] animate-pulse'
                    :
                        'hidden'
                }
            />
            <img
                className={
                    isLoaded ?
                        'block w-full h-[100svh] object-cover grayscale-[.25] blur-[1px] brightness-[.8] saturate-[1.25]'
                    :
                        'hidden'
                }
                src={heroBg}
                alt='fotografía de una madre sosteniendo a su bebé'
                onLoad={() => setIsLoaded(true)}
            />
        </>
    )
};

export default HeroImg;
