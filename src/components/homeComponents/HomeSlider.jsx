import logo1 from '../../assets/sliderLogos/pampers.svg'; 
import logo2 from '../../assets/sliderLogos/huggies.svg'; 
import logo3 from '../../assets/sliderLogos/nonisec.svg'; 
import logo4 from '../../assets/sliderLogos/comodin.svg'; 
import logo5 from '../../assets/sliderLogos/estrella.svg';
import logo6 from '../../assets/sliderLogos/plenitud.svg';
import logo7 from '../../assets/sliderLogos/petit.svg';
import logo8 from '../../assets/sliderLogos/trifarma.svg';
import logo9 from '../../assets/sliderLogos/paez.svg';
import logo10 from '../../assets/sliderLogos/doncella.svg';
import logo11 from '../../assets/sliderLogos/kimbies.svg';
import logo12 from '../../assets/sliderLogos/qsoft.svg';
import { useState } from 'react';

const HomeSlider = () => {
    const [slides,] = useState()

    return (
        <div className='inline-block animate-slide'>
            <div className='w-full flex justify-between items-center'>
                <div className='w-24 mx-8'>
                    <img
                        src={logo1}
                        alt='logo Pampers'
                        className='block w-full'
                    />
                </div>
                <div className='w-24 mx-8'>
                    <img
                        src={logo2}
                        alt='logo Huggies'
                        className='block w-full'
                    />
                </div>
                <div className='w-24 mx-8'>
                    <img
                        src={logo3}
                        alt='logo Nonisec'
                        className='block w-full'
                    />
                </div>
                <div className='w-24 mx-8'>
                    <img
                        src={logo4}
                        alt='logo Comodin'
                        className='block w-full'
                    />
                </div>
                <div className='w-24 mx-8'>
                    <img
                        src={logo5}
                        alt='logo Estrella'
                        className='block w-full'
                    />
                </div>
                <div className='w-24 mx-8'>
                    <img
                        src={logo6}
                        alt='logo Plenitud'
                        className='block w-full'
                    />
                </div>
                <div className='w-24 mx-8'>
                    <img
                        src={logo7}
                        alt='logo Petit'
                        className='block w-full'
                    />
                </div>
                <div className='w-24 mx-8'>
                    <img
                        src={logo8}
                        alt='logo Trifarma'
                        className='block w-full'
                    />
                </div>
                <div className='w-24 mx-8'>
                    <img
                        src={logo9}
                        alt='logo Paez'
                        className='block w-full'
                    />
                </div>
                <div className='w-24 mx-8'>
                    <img
                        src={logo10}
                        alt='logo Doncella'
                        className='block w-full'
                    />
                </div>
                <div className='w-24 mx-8'>
                    <img
                        src={logo11}
                        alt='logo Kimbies'
                        className='block w-full'
                    />
                </div>
                <div className='w-24 mx-8'>
                    <img
                        src={logo12}
                        alt='logo Q Soft'
                        className='block w-full'
                    />
                </div>
            </div>
        </div>
    )
};

export default HomeSlider;
