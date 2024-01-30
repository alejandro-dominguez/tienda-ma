const MessageDetailCard = ({ message }) => {
    return (
        <div className='flex flex-col items-start justify-start w-full bg-white rounded-md p-5
        drop-shadow-sm shadow-sm mt-4 mb-20 gap-2'>
            <h1 className='font-bold font-Raleway text-[1.05rem] drop-shadow-sm'>
                Mensaje de {message.fullName}:
            </h1>
            <p className='text-[.92rem] leading-[1.35rem]'>
                {message.message}
            </p>
            <span className='font-bold flex gap-1 items-center'>
                Teléfono:
                <span className='font-normal text-sm mt-[.1rem]'>
                    {message.phone}
                </span>
            </span>
            <span className='font-bold flex gap-1 items-center'>
                Email:
                <span className='font-normal text-sm mt-[.1rem]'>
                    {message.email}
                </span>
            </span>
        </div>
    )
};

export default MessageDetailCard;
