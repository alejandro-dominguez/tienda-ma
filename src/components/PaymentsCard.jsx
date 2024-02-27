const PaymentsCard = ({ payment }) => {
    return (
        <div className='p-5 grid place-items-start bg-white rounded-md shadow-sm drop-shadow-sm max-w-xs min-h-[9rem]'>
            <h3 className='font-Raleway font-black text-xl justify-self-center'>
                {payment.title}
            </h3>
            <span className='text-start text-sm mt-2 font-bold'>
                {payment.descLine1}
            </span>
            <span className='text-start text-sm mt-2 font-bold'>
                {payment.descLine2}
            </span>
            <span className='text-start text-sm mt-2 font-bold'>
                {payment.descLine3}
            </span>
        </div>
    )
};

export default PaymentsCard;
