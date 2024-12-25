import React from 'react';

const Searchbox = ({ query, setQuery, handleAddKeyword, isLoading }) => {
    return (
        <div>
            <input
                type="text"
                placeholder="請輸入關鍵字"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleAddKeyword} disabled={isLoading || !query}>
                添加關鍵字
            </button>
        </div>
    );
}

export default Searchbox;
