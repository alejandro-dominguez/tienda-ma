const PaymentsCard = ({ payment }) => {
    return (
        <div className='p-5 grid place-items-center bg-white rounded-md shadow-sm drop-shadow-sm'>
            <h3 className='font-Raleway font-black text-xl'>
                {payment.title}
            </h3>
            <span className='text-center text-sm mt-2'>
                {payment.desc}
            </span>
        </div>
    )
};

export default PaymentsCard;
