import NavItem from './navBar/NavItem';
import SearchBar from './navBar/SearchBar';

const NavItemMenu = ({ navData, hideMenu }) => {
    return (
        <div className=
            {
                !hideMenu ?
                    `absolute w-full lg:w-fit -bottom-[5.1rem] lg:static grid grid-cols-3 gap-6 place-items-center lg:flex
                    lg:flex-row lg:gap-1 lg:justify-between items-center lg:ml-auto lg:mr-10 py-5 lg:py-0 px-4 lg:px-0
                    bg-white z-20 transition-all duration-[185ms] ease-in-out opacity-100 pointer-events-auto`
                :
                    `absolute w-full lg:w-fit -bottom-[5.1rem] lg:static grid grid-cols-3 gap-6 place-items-center lg:flex
                    lg:flex-row lg:gap-1 lg:justify-between items-center lg:ml-auto lg:mr-10 py-5 lg:py-0 px-4 lg:px-0
                    bg-white z-20 transition-all duration-[185ms] ease-in-out opacity-0 pointer-events-none`
            }
        >
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
            <div className='absolute w-full -bottom-10 lg:bottom-3 lg:right-10 bg-white lg:bg-transparent
            lg:w-fit shadow-sm lg:shadow-none'>
                <div className='ml-5 mb-5 mt-2 lg:mb-0 w-full'>
                    <SearchBar />
                </div>
            </div>
        </div>
    )
};

export default NavItemMenu;
