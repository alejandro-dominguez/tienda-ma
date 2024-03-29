const PaymentsCard = ({ payment }) => {
    return (
        <div className='p-5 grid place-items-start bg-white rounded-md shadow-sm drop-shadow-sm max-w-xs min-h-[13rem]'>
            <h3 className='font-Raleway font-black text-xl justify-self-center text-center'>
                {payment.title}
            </h3>
            <span className='text-start text-sm mt-2 font-bold'>
                {payment.descLine1}
            </span>
            {
                payment.descLine2 ?
                    <span className='text-start text-sm mt-1 font-bold'>
                        {payment.descLine2}
                    </span>
                :
                    null
            }
            {
                payment.descLine3 ?
                    <span className='text-start text-sm mt-1 font-bold'>
                        {payment.descLine3}
                    </span>
                :
                    null
            }
        </div>
    )
};

export default PaymentsCard;
