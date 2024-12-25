import React from 'react';
import ListItem from './ListItem';

const DataList = ({ data, isLoading, timeDifference }) => {
    return (
        <>
            {isLoading ? (
                <div>加載中...</div>
            ) : (
                data.map((item) => (
                    <ListItem 
                        key={item.pid}
                        item={item}
                        timeDifference={timeDifference}
                    />
                ))
            )}
        </>
    );
}

export default DataList;
