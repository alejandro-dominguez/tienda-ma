import {
    useEffect,
    useState
} from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = ({ navItem, setHideMenu }) => {
    const [ responsiveMenu, setResponsiveMenu ] = useState(false)
    const {
        url,
        twoLines,
        name,
        nameLine1,
        nameLine2
    } = navItem

    useEffect(() => {
        const isMobileViewport = window.visualViewport.width < 1024
        isMobileViewport ? setResponsiveMenu(true) : setResponsiveMenu(false)
    }, [])

    const responsiveLink = () => {
        responsiveMenu ? setHideMenu(true) : setHideMenu(false)
    }

    return (
        <NavLink
            to={url}
            className="relative block py-[.4rem] px-0 lg:py-6 lg:px-4 after:block after:content-[''] after:absolute
            lg:after:bottom-[1.25rem] after:h-[3px] after:translate-x-1/2 after:right-1/2 after:bg-red-500/60 lg:after:w-[75%]
            after:scale-x-0 after:w-full after:transition-all after:ease-in-out after:duration-[250ms] after:origin-left
            after:blur-[.45px] after:bottom-[.15rem] after:hover:scale-x-100 after:hover:drop-shadow-sm after:focus:scale-x-100
            after:focus:drop-shadow-sm"
            onClick={() => responsiveLink()}
        >
            {
                !twoLines ?
                    <span className='text-[.8rem] md:text-[.84rem] uppercase font-black tracking-[.05em]
                    text-zinc-600/[85%] drop-shadow-sm'>
                        {name}
                    </span>
                :
                    <span className='flex flex-col text-[.8rem] md:text-[.84rem] uppercase font-black tracking-[.05em]
                    text-zinc-600/[85%] drop-shadow-sm leading-5'>
                        <span>
                            {nameLine1}
                        </span>
                        <span>
                            {nameLine2}
                        </span>
                    </span>
            }
        </NavLink>
    )
};

export default NavItem;
