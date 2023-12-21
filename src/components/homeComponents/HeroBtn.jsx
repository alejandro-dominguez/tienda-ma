import { scrollToElement } from '../../utilities';

const HeroBtn = ({ btnData }) => {
    return (
        <button
            type='button'
            className='shadow-sm w-36 py-2 bg-zinc-800/10 border-2 border-white/80 rounded-lg transition-colors
            ease-in-out hover:border-white hover:bg-zinc-700/30 focus:border-white focus:bg-zinc-700/30'
            onClick={() => scrollToElement(`${btnData.section}`)}
        >
            <span className='drop-shadow-sm text-white uppercase tracking-wider text-sm'>
                {btnData.name}
            </span>
        </button>
    )
};

export default HeroBtn;
