import AdminCmtCard from './adminItems/AdminCmtCard';

const AdminCommentsContainer = ({
    pendingCommentsData,
    setActiveToast,
    setErrorToast
}) => {
    return (
        <>
        {
            pendingCommentsData.map((cmt, i) => {
                return <AdminCmtCard
                            setActiveToast={setActiveToast}
                            setErrorToast={setErrorToast}
                            comment={cmt}
                            key={i}
                        />
            })
        }
        </>
    )
};

export default AdminCommentsContainer;
