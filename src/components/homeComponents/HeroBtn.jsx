import { scrollToElement } from '../../utilities';

const HeroBtn = ({ btnData }) => {
    return (
        <button
            type='button'
            className='btn-shadow text-sm uppercase tracking-wider text-teal-50/90 shadow-sm drop-shadow md:px-6 md:py-3
            bg-zinc-800/10 border-2 border-white/60 rounded-full transition-colors ease-in-out hover:border-white/80
            hover:text-white hover:bg-zinc-700/30 focus:border-white/80 focus:text-white focus:bg-zinc-700/30'
            onClick={() => scrollToElement(`${btnData.section}`)}
        >
            {btnData.name}
        </button>
    )
};

export default HeroBtn;
