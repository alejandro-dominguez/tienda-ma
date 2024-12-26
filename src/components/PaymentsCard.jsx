const PaymentsCard = ({ payment }) => {
    const {
        title,
        descLine1,
        descLine2,
        descLine3
    } = payment

    return (
        <div className='p-5 grid place-items-start bg-white rounded-md shadow-sm drop-shadow-sm max-w-xs min-h-[13rem]'>
            <h3 className='font-Raleway font-black text-xl justify-self-center text-center'>
                {title}
            </h3>
            <span className='text-start text-sm mt-2 font-bold'>
                {descLine1}
            </span>
            {
                descLine2 !== '' ?
                    <span className='text-start text-sm mt-1 font-bold'>
                        {descLine2}
                    </span>
                :
                    null
            }
            {
                descLine3 !== '' ?
                    <span className='text-start text-sm mt-1 font-bold'>
                        {descLine3}
                    </span>
                :
                    null
            }
        </div>
    )
};

export default PaymentsCard;
