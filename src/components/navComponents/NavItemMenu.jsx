import {
    useEffect,
    useState
} from 'react';
import NavItem from './navBar/NavItem';
import SearchBar from './navBar/SearchBar';

const NavItemMenu = ({
    navData,
    hideMenu,
    showNav
}) => {
    const [ inputValue, setInputValue ] = useState('')
    const [ showSearch, setShowSearch ] = useState(true)

    useEffect(() => {
        showNav ?
            (
                setShowSearch(false),
                setInputValue('')
            )
        :
            null
    }, [showNav])

    return (
        <div className=
            {
                !hideMenu ?
                    `absolute w-full lg:w-fit -bottom-[8.5rem] lg:static grid grid-cols-3 gap-4 place-items-center lg:flex
                    lg:flex-row lg:gap-0 lg:justify-between items-center lg:ml-auto lg:mr-10 py-5 lg:py-0 px-4 lg:px-0
                    bg-white z-20 transition-all duration-[185ms] ease-in-out opacity-100 pointer-events-auto`
                :
                    `absolute w-full lg:w-fit -bottom-[8.5rem] lg:static grid grid-cols-3 gap-4 place-items-center lg:flex
                    lg:flex-row lg:gap-0 lg:justify-between items-center lg:ml-auto lg:mr-10 py-5 lg:py-0 px-4 lg:px-0
                    bg-white z-20 transition-all duration-[185ms] ease-in-out opacity-0 pointer-events-none`
            }
        >
            <div className='absolute grid place-items-center top-28 bg-white w-full py-5 lg:py-0 lg:w-fit
            lg:static shadow lg:shadow-none'>
                <SearchBar
                    showNav={showNav}
                    inputValue={inputValue}
                    showSearch={showSearch}
                    setInputValue={setInputValue}
                    setShowSearch={setShowSearch}
                />
            </div>
            {
                navData.map((data, i) => {
                    return (
                        <NavItem
                            navItem={data}
                            key={i}
                            hideMenu={hideMenu}
                        />
                )})
            }
        </div>
    )
};

export default NavItemMenu;
