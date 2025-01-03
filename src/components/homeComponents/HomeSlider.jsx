import logo1 from '../../assets/sliderLogos/pampers.svg'; 
import logo2 from '../../assets/sliderLogos/huggies.svg'; 
import logo3 from '../../assets/sliderLogos/nonisec.svg'; 
import logo4 from '../../assets/sliderLogos/comodin.svg'; 
import logo5 from '../../assets/sliderLogos/estrella.svg';
import logo6 from '../../assets/sliderLogos/plenitud.svg';
import logo7 from '../../assets/sliderLogos/duffy.png';
import logo8 from '../../assets/sliderLogos/trifarma.svg';
import logo9 from '../../assets/sliderLogos/paez.svg';
import logo10 from '../../assets/sliderLogos/doncella.svg';
import logo11 from '../../assets/sliderLogos/kimbies.svg';
import logo12 from '../../assets/sliderLogos/qsoft.svg';

const HomeSlider = () => {
    return (
        <div className='inline-block animate-slide'>
            <div className='w-full flex justify-between items-center'>
                <div className='w-20 sm:w-24 mx-[.95rem] sm:mx-8'>
                    <img
                        src={logo1}
                        alt='logo Pampers'
                        className='drop-shadow-sm'
                    />
                </div>
                <div className='w-20 sm:w-24 mx-[.95rem] sm:mx-8'>
                    <img
                        src={logo2}
                        alt='logo Huggies'
                        className='drop-shadow-sm'
                    />
                </div>
                <div className='w-20 sm:w-24 mx-[.95rem] sm:mx-8'>
                    <img
                        src={logo3}
                        alt='logo Nonisec'
                        className='drop-shadow-sm'
                    />
                </div>
                <div className='w-20 sm:w-24 mx-[.95rem] sm:mx-8'>
                    <img
                        src={logo4}
                        alt='logo Comodin'
                        className='drop-shadow-sm'
                    />
                </div>
                <div className='w-20 sm:w-24 mx-[.95rem] sm:mx-8'>
                    <img
                        src={logo5}
                        alt='logo Estrella'
                        className='drop-shadow-sm'
                    />
                </div>
                <div className='w-20 sm:w-24 mx-[.95rem] sm:mx-8'>
                    <img
                        src={logo6}
                        alt='logo Plenitud'
                        className='drop-shadow-sm'
                    />
                </div>
                <div className='w-16 sm:w-20 mx-[.95rem] sm:mx-8'>
                    <img
                        src={logo7}
                        alt='logo Duffy'
                        className='drop-shadow-sm'
                    />
                </div>
                <div className='w-20 sm:w-24 mx-[.95rem] sm:mx-8'>
                    <img
                        
                        src={logo8}
                        alt='logo Trifarma'
                        className='drop-shadow-sm'
                    />
                </div>
                <div className='w-20 sm:w-24 mx-[.95rem] sm:mx-8'>
                    <img
                        src={logo9}
                        alt='logo Paez'
                        className='drop-shadow-sm'
                    />
                </div>
                <div className='w-20 sm:w-24 mx-[.95rem] sm:mx-8'>
                    <img
                        src={logo10}
                        alt='logo Doncella'
                        className='drop-shadow-sm'
                    />
                </div>
                <div className='w-20 sm:w-24 mx-[.95rem] sm:mx-8'>
                    <img
                        src={logo11}
                        alt='logo Kimbies'
                        className='drop-shadow-sm'
                    />
                </div>
                <div className='w-20 sm:w-24 mx-[.95rem] sm:mx-8'>
                    <img
                        src={logo12}
                        alt='logo Q Soft'
                        className='drop-shadow-sm'
                    />
                </div>
            </div>
        </div>
    )
};

export default HomeSlider;
