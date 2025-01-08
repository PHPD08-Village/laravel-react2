// freelancer2/components/Pagination.jsx
import React, { useContext } from 'react';
import { AppfreelancerContext } from '../../AppProvider';

const Pagination = () => {
    const { totalPages, currentPage, setCurrentPage } = useContext(AppfreelancerContext);

    const createPageButtons = () => {
        const pageButtons = [];
        const startPage = Math.max(1, currentPage - 2);
        const endPage = Math.min(totalPages, currentPage + 2);

        if (currentPage > 1) {
            pageButtons.push(
                <button key="first" onClick={() => setCurrentPage(1)}><img src="/img/left.png" alt="First Page" /></button>,
                <button className="fleftnext" key="prev" onClick={() => setCurrentPage(currentPage - 1)}><img src="/img/leftnext.png" alt="Previous Page" />上一頁</button>
            );
        }

        for (let i = startPage; i <= endPage; i++) {
            pageButtons.push(
                <button
                    key={i}
                    className={i === currentPage ? 'current-page' : ''}
                    onClick={() => setCurrentPage(i)}
                >
                    {i}
                </button>
            );
        }

        if (currentPage < totalPages) {
            pageButtons.push(
                <button className="fleftnext" key="next" onClick={() => setCurrentPage(currentPage + 1)}>下一頁<img src="/img/rightnext.png" alt="Next Page" /></button>,
                <button key="last" onClick={() => setCurrentPage(totalPages)}><img src="/img/right.png" alt="Last Page" /></button>
            );
        }

        return pageButtons;
    };

    return (
        <>
            <div className="ftab">
                {createPageButtons()}
            </div>
        </>
    );
};

export default Pagination;
