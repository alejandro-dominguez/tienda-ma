import { Link } from 'react-router-dom';

const AdminMenuItem = ({ itemData }) => {
    return (
        <Link
            to={itemData.url}
            className='grid place-items-center'
        >
            <span className='my-1 md:my-0 font-bold text-sm tracking-wide drop-shadow-sm py-2 px-3 text-center border-2
            w-44 rounded-lg border-red-500/50 bg-red-100/[7%]'>
                {itemData.name}
            </span>
        </Link>
    )
};

export default AdminMenuItem;
