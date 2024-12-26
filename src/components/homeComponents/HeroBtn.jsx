import { useNavigate } from 'react-router-dom';
import scrollToElement from '../../utilities/scrollToElement';

const HeroBtn = ({ btnData }) => {
    const navigate = useNavigate()
    const {
        url,
        section,
        name
    } = btnData
    
    return (
        <button
            type='button'
            className=
                {
                    url !== 'sobreUstedes' ?
                        `shadow-sm w-40 py-1 sm:py-2 bg-zinc-800/10 border-2 border-white/80 rounded-lg transition-colors
                        ease-in-out hover:border-white hover:bg-zinc-700/30 focus:border-white focus:bg-zinc-700/30`
                    :
                        `shadow-sm w-40 py-1 sm:py-2 bg-zinc-800/10 border-2 border-white/80 rounded-lg transition-colors
                        ease-in-out hover:border-white hover:bg-zinc-700/30 focus:border-white
                        focus:bg-zinc-700/30 leading-[1.4rem]`
                }
            onClick=
                {
                    url ?
                        () => navigate(`/${url}`)
                    :
                        () => scrollToElement(`${section}`)
                }
        >
            <span className='drop-shadow-sm text-white uppercase tracking-widest md:tracking-wider text-[.785rem] md:text-sm'>
                {name}
            </span>
        </button>
    )
};

export default HeroBtn;
