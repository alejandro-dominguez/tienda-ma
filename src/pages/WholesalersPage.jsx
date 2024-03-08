import WholesalersForm from '../components/WholesalersForm';

const WholesalersPage = () => {
    return (
        <main className='w-full min-h-[100svh]'>
            <h1 className='font-bold font-Raleway text-[1.75rem] md:text-3xl drop-shadow-sm pb-3 pt-12 mt-20 w-fit mx-auto'>
                Mayoristas
            </h1>
            <WholesalersForm />
        </main>
    )
};

export default WholesalersPage;
