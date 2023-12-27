import scrollToElement from '../../utilities/scrollToElement';

const HeroBtn = ({ btnData }) => {
    return (
        <button
            type='button'
            className='shadow-sm w-40 py-1 sm:py-2 bg-zinc-800/10 border-2 border-white/80 rounded-lg transition-colors
            ease-in-out hover:border-white hover:bg-zinc-700/30 focus:border-white focus:bg-zinc-700/30'
            onClick={() => scrollToElement(`${btnData.section}`)}
        >
            <span className='drop-shadow-sm text-white uppercase tracking-widest md:tracking-wider text-[.785rem] md:text-sm'>
                {btnData.name}
            </span>
        </button>
    )
};

export default HeroBtn;
