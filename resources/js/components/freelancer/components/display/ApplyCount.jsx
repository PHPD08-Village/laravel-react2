import React from 'react';

const ApplyCount = ({ count }) => {
    const getRange = (count) => {
        if (count === 0) return '0';
        if (count >= 1 && count <= 5) return '1~5';
        if (count >= 6 && count <= 10) return '6~10';
        if (count >= 11 && count <= 15) return '11~15';
        if (count >= 16 && count <= 20) return '16~20';
        if (count >= 21 && count <= 25) return '21~25';
        if (count >= 26 && count <= 30) return '26~30';
        if (count >= 31 && count <= 35) return '31~35';
        if (count >= 36 && count <= 40) return '36~40';
        return '41以上';
    };

    return (
        <div className="fpeople">
            {getRange(count)} 人爭取中
        </div>
    );
};

export default ApplyCount;
