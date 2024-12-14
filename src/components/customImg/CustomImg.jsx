import { useState } from 'react';

const CustomImg = ({
    src,
    alt,
    contain,
    center,
    aspectVideo
}) => {
    const [ isLoaded, setIsLoaded ] = useState(false)
    
    return (
        <>
            <div
                className={
                    !isLoaded ?
                        'block w-full rounded drop-shadow-sm aspect-square bg-teal-500/[8%] animate-pulse'
                    :
                        'hidden'
                }
            />
            <img
                className={
                    isLoaded && !contain && !center && !aspectVideo ?
                        'rounded drop-shadow-sm aspect-square object-cover'
                        : contain ?
                            'rounded drop-shadow-sm aspect-square object-contain'
                        : center ?
                            'object-cover aspect-square object-center drop-shadow-sm'
                        : aspectVideo ?
                            'object-cover aspect-video object-center drop-shadow-sm'
                    :
                        'hidden'
                }
                src={src}
                alt={alt}
                onLoad={() => setIsLoaded(true)}
            />
        </>
    )
};

export default CustomImg;
