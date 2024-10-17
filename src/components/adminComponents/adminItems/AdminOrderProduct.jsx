import numberFormater from '../../../utilities/numberFormater';

const AdminOrderProduct = ({ product }) => {
    return (
        <div className='grid place-items-start gap-[.15rem]'>
            <h3 className='font-Raleway font-black drop-shadow-sm tracking-wide text-[.85rem]'>
                {product.brand} {product.name}
            </h3>
            <div className='w-[4.5rem] drop-shadow mt-1'>
                <img
                    
                    src={product.img}
                    alt={product.name}
                    className='block w-full rounded drop-shadow-sm aspect-square object-cover'
                />
            </div>
            <span className='text-[.835rem] font-black tracking-wide mt-1'>
                Cantidad: {product.quantity}
            </span>
            <span className='text-[.835rem] font-black tracking-wide'>
                Precio unitario: {numberFormater(product.price)}
            </span>
            {
                product.selectedSize ?
                    <span className='text-[.835rem] font-black tracking-wide -mt-[.2rem]'>
                        Talle: {product.selectedSize}
                    </span>
                : product.selectedAdultSize ?
                    <span className='text-[.835rem] font-black tracking-wide -mt-[.2rem]'>
                        Talle: {product.selectedAdultSize}
                    </span>
                :
                    null
            }
        </div>
    )
};

export default AdminOrderProduct;
