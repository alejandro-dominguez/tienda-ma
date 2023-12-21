import NavItem from './navBar/NavItem';

const NavItemMenu = ({ navData, hideMenu }) => {
    return (
        <div className=
            {
                !hideMenu ?
                    `absolute w-screen lg:w-fit -bottom-28 lg:inset-0 grid grid-cols-3 place-items-center lg:flex lg:flex-row
                    lg:gap-2 lg:justify-between items-center lg:ml-auto lg:mr-10 py-5 lg:py-0 px-4 lg:px-0 bg-white z-20 transition
                    duration-200 ease-in-out`
                : 'hidden'
            }
        >
            {navData.map((data, i) => {
                return (
                    <NavItem
                        navItem={data}
                        key={i}
                        hideMenu={hideMenu}
                    />
                )
            })}
        </div>
    )
};

export default NavItemMenu;
