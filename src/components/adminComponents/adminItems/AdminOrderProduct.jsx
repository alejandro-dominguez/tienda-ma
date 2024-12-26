import numberFormater from '../../../utilities/numberFormater';
import CustomImg from '../../customImg/CustomImg';

const AdminOrderProduct = ({ product }) => {
    const {
        brand,
        name,
        img,
        quantity,
        price,
        selectedSize,
        selectedAdultSize
    } = product
    return (
        <div className='grid place-items-start gap-[.15rem]'>
            <h3 className='font-Raleway font-black drop-shadow-sm tracking-wide text-[.85rem]'>
                {brand} {name}
            </h3>
            <div className='w-[4.5rem] drop-shadow mt-1'>
                <CustomImg
                    src={img}
                    alt={name}
                    contain={false}
                    center={false}
                    aspectVideo={false}
                />
            </div>
            <span className='text-[.835rem] font-black tracking-wide mt-1'>
                Cantidad: {quantity}
            </span>
            <span className='text-[.835rem] font-black tracking-wide'>
                Precio unitario: {numberFormater(price)}
            </span>
            {
                selectedSize ?
                    <span className='text-[.835rem] font-black tracking-wide -mt-[.2rem]'>
                        Talle: {selectedSize}
                    </span>
                : selectedAdultSize ?
                    <span className='text-[.835rem] font-black tracking-wide -mt-[.2rem]'>
                        Talle: {selectedAdultSize}
                    </span>
                :
                    null
            }
        </div>
    )
};

export default AdminOrderProduct;
