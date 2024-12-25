import React, { useState, useEffect } from 'react';
import Searchbox from './Searchbox';
import KeywordList from './KeywordList';
import DataList from './DataList';
import axios from 'axios';
import moment from 'moment';

const Search = () => {
    // state declarations and effects
    // handleAddKeyword, handleRemoveKeyword, handleSortToggle functions

    return (
        <div>
            <Searchbox 
                query={query}
                setQuery={setQuery}
                handleAddKeyword={handleAddKeyword}
                isLoading={isLoading}
            />
            <KeywordList 
                keywords={keywords}
                handleRemoveKeyword={handleRemoveKeyword}
            />
            <div>目前共有 {filteredData.length} 筆資料</div>
            <button onClick={handleSortToggle}>
                {sortOrder === 'asc' ? '由小到大' : '由大到小'} 排序
            </button>
            <DataList 
                data={filteredData}
                isLoading={isLoading}
                timeDifference={timeDifference}
            />
        </div>
    );
}

export default Search;
