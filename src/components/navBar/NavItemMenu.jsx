import NavItem from './navComponents/NavItem';


const NavItemMenu = ({ navData }) => {
    return (
        <>
            {navData.map((data, i) => {
                return <NavItem navItem={data} key={i} />
            })}
        </>
    )
};

export default NavItemMenu;
