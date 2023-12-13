import { NavLink } from 'react-router-dom';

const NavItem = ({ navItem }) => {
    return (
        <NavLink
            to={navItem.url}
            className="relative w-max block uppercase text-[.9rem] font-bold tracking-wide text-zinc-600/90 px-8 py-5 transition-colors
            ease-linear duration-150 hover:text-red-500 focus:text-red-500 after:block after:content-[''] after:absolute
            after:h-[3.3px] after:translate-x-1/2 after:right-1/2 after:bg-red-400/90 after:w-2/3 after:scale-x-0  after:bottom-3
            after:transition after:ease-in-out after:duration-[250ms] after:origin-left after:blur-[.45px] after:hover:scale-x-100
            after:hover:drop-shadow after:focus:scale-x-100 after:focus:drop-shadow"
        >
            <span className='nav-link-shadow'>
                {navItem.name}
            </span>
        </NavLink>
    )
};

export default NavItem;
