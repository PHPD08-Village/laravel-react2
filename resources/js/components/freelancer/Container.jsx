// freelancer2/Container.jsx
import React, { useContext } from 'react';
import LanguageFilter from './components/filters/LanguageFilter';
import RatingFilter from './components/filters/RatingFilter';
import BudgetFilter from './components/filters/BudgetFilter';
import KeywordSearch from './components/search/KeywordSearch';
import SelectedKeywords from './components/search/SelectedKeywords';
import SortingOptions from './components/display/SortingOptions';
import ResultsDisplay from './components/display/ResultsDisplay';
import Pagination from './components/display/Pagination';
import Floating from '../allpage/Floatingbuttons';

import AppProvider, { AppContext } from './AppProvider'; // 引入 Context Provider

const ContainerContent = () => {
    const { totalPages, currentPage, setCurrentPage } = useContext(AppContext);

    return (
        <>
            <div className="fcontainer">
                <div className="foptions">{/* 篩選器 */}
                    <LanguageFilter /><hr />
                    <RatingFilter /><hr />
                    <BudgetFilter />
                </div>
                <div className="fmaincontainer">{/* 主內容區塊 */}
                    <div>
                        <KeywordSearch />
                        <SelectedKeywords />
                        <SortingOptions />
                    </div>
                    <ResultsDisplay />
                    <Pagination totalPages={totalPages} currentPage={currentPage} setPage={setCurrentPage} />
                </div>
                <Floating />
            </div>
        </>
    );
};

const Container = () => {
    return (
        <AppProvider>
            <ContainerContent />
        </AppProvider>
    );
};

export default Container;
