const PageSelector = ({
    nextPage,
    prevPage,
    currentPage,
    totalPages,
}: {
    nextPage: () => void;
    prevPage: () => void;
    currentPage: number;
    totalPages: number;
}) => {
    return (
        <div className='pageSelector'>
            <button
                className={currentPage === 1 ? 'disabled' : 'null'}
                style={{ borderRadius: '3px 0 0 3px' }}
                onClick={prevPage}
            >
                Назад
            </button>
            <button
                className={currentPage === totalPages ? 'disabled' : 'null'}
                style={{ borderRadius: '0 3px 3px 0' }}
                onClick={nextPage}
            >
                Вперед
            </button>
            <p>
                {currentPage} of {totalPages}
            </p>
        </div>
    );
};

export { PageSelector };
