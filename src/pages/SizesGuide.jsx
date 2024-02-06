import {
    useContext,
    useState
} from 'react';
import { SiteContext } from '../contexts/siteContext';
import DisabledSite from '../components/DisabledSite';
import SizesBrandGuide from '../components/SizesBrandGuide';
import SizesNoBrandGuide from '../components/SizesNoBrandGuide';
import logo1 from '../assets/sliderLogos/huggies.svg'
import logo2 from '../assets/sliderLogos/pampers.svg'
import logo3 from '../assets/sliderLogos/estrella.svg'
import logo4 from '../assets/sliderLogos/babysec.svg'
import logo5 from '../assets/sliderLogos/duffy.png'

const SizesGuide = () => {
    const { enableSite } = useContext(SiteContext)
    const [ huggies, ] = useState([
        {
            'size': 'RN',
            'kg': 'Hasta 4 kg'
        },
        {
            'size': 'P',
            'kg': '3,5 a 6 kg'
        },
        {
            'size': 'M',
            'kg': '5,5 a 9,5 kg'
        },
        {
            'size': 'G',
            'kg': '9 a 12,5 kg'
        },
        {
            'size': 'XG',
            'kg': '12 a 15 kg'
        },
        {
            'size': 'XXG',
            'kg': '+ 14 kg'
        },
        {
            'size': 'XXXG',
            'kg': '+ 18 kg'
        }
    ])
    const [ huggiesSwim, ] = useState([
        {
            'size': 'PM',
            'kg': '7 a 12 kg'
        },
        {
            'size': 'MG',
            'kg': '12 a 15 kg'
        },
        {
            'size': 'GXG',
            'kg': '14 a 20 kg'
        },
    ])
    const [ pampers, ] = useState([
        {
            'size': 'RN',
            'kg': 'Hasta 4 kg'
        },
        {
            'size': 'RN+',
            'kg': 'Hasta 6 kg'
        },
        {
            'size': 'P',
            'kg': '5 a 8 kg'
        },
        {
            'size': 'M',
            'kg': '6 a 10 kg'
        },
        {
            'size': 'G',
            'kg': '9 a 13 kg'
        },
        {
            'size': 'XG',
            'kg': '11 a 15 kg'
        },
        {
            'size': 'XXG',
            'kg': '+ 14 kg'
        }
    ])
    const [ pampersSwim, ] = useState([
        {
            'size': 'PM',
            'kg': '6 a 10 kg'
        },
        {
            'size': 'G',
            'kg': '9 a 13 kg'
        },
        {
            'size': 'XG',
            'kg': '11 a 15 kg'
        },
    ])
    const [ estrella, ] = useState([
        {
            'size': 'P',
            'kg': 'Hasta 7,5 kg'
        },
        {
            'size': 'M',
            'kg': '6 a 9,5 kg'
        },
        {
            'size': 'G',
            'kg': '9 a 12,5 kg'
        },
        {
            'size': 'XG',
            'kg': '12 a 15 kg'
        },
        {
            'size': 'XXG',
            'kg': '+ 14 kg'
        },
        {
            'size': 'JR',
            'kg': '+ 18 kg'
        },
    ])
    const [ babysec, ] = useState([
        {
            'size': 'M',
            'kg': '5 a 9,5 kg'
        },
        {
            'size': 'G',
            'kg': '8,5 a 12 kg'
        },
        {
            'size': 'XG',
            'kg': '11 a 14 kg'
        },
        {
            'size': 'XXG',
            'kg': '+ 13 kg'
        },
    ])
    const [ duffy, ] = useState([
        {
            'size': 'P',
            'kg': 'Hasta 6 kg'
        },
        {
            'size': 'M',
            'kg': '5 a 9,5 kg'
        },
        {
            'size': 'G',
            'kg': '8,5 a 12 kg'
        },
        {
            'size': 'XG',
            'kg': '11 a 14 kg'
        },
        {
            'size': 'XXG',
            'kg': '+ 13 kg'
        },
    ])
    
    return (
        <>
        {
            enableSite.enabled ?
                <main className='w-full min-h-[100svh]'>
                    <h1 className='font-bold font-Raleway text-[1.75rem] md:text-3xl drop-shadow-sm pb-3 pt-10 mt-20 w-fit mx-auto'>
                        Guía de talles
                    </h1>
                    <div className='grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        <SizesBrandGuide
                            brand={huggies}
                            logo={logo1}
                        />
                        <SizesNoBrandGuide
                            brand={huggiesSwim}
                            name={'Huggies Little Swimmers'}
                        />
                        <SizesBrandGuide
                            brand={pampers}
                            logo={logo2}
                        />
                        <SizesNoBrandGuide
                            brand={pampersSwim}
                            name={'Pampers Splasher'}
                        />
                        <SizesBrandGuide
                            brand={estrella}
                            logo={logo3}
                        />
                        <SizesBrandGuide
                            brand={babysec}
                            logo={logo4}
                        />
                        <SizesBrandGuide
                            brand={duffy}
                            logo={logo5}
                        />
                    </div>
                </main>
            :
                <DisabledSite />
        }
        </>
    )
};

export default SizesGuide;
