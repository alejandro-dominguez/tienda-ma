import { NavLink } from 'react-router-dom';

const NavItem = ({ navItem }) => {
    return (
        <NavLink
            to={navItem.url}
            className="relative block py-[.4rem] px-0 lg:py-6 lg:px-4 after:block after:content-[''] after:absolute
            lg:after:bottom-[1.35rem] after:h-[3px] after:translate-x-1/2 after:right-1/2 after:bg-red-500/60 lg:after:w-[75%]
            after:scale-x-0 after:w-full after:transition-all after:ease-in-out after:duration-[250ms] after:origin-left
            after:blur-[.45px] after:bottom-[.25rem] after:hover:scale-x-100 after:hover:drop-shadow-sm after:focus:scale-x-100
            after:focus:drop-shadow-sm"
        >
            {
                !navItem.twoLines ?
                    <span className='text-[.8rem] md:text-[.84rem] uppercase font-black tracking-[.05em]
                    text-zinc-600/[85%] drop-shadow-sm'>
                        {navItem.name}
                    </span>
                :
                    <span className='flex flex-col text-[.8rem] md:text-[.84rem] uppercase font-black tracking-[.05em]
                    text-zinc-600/[85%] drop-shadow-sm leading-5'>
                        <span>
                            {navItem.nameLine1}
                        </span>
                        <span>
                            {navItem.nameLine2}
                        </span>
                    </span>
            }
        </NavLink>
    )
};

export default NavItem;
