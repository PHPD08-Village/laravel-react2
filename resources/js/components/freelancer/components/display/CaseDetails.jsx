// freelancer2/components/display/CaseDetails.jsx
// 與案件相關數據

import React from 'react';

const TextLimit = ({ text, limit }) => {
    const truncatedText = text.length > limit ? text.substring(0, limit) + '...' : text;

    return <div className="fcasecontent">描述內容：{truncatedText}</div>;
};

const CaseDetails = ({ result, handleNavigation }) => {
    return (
        <div className="fcontent2" onClick={() => handleNavigation(result)}>
            <div className="ftitle">
                <h1>{result.title}</h1>
            </div>
            <div className="fset">
                <div className="fdate">
                    <h4>完成時間：{new Date(result.completion_time).toLocaleDateString()}</h4>
                </div>
                <div className="fcaseprice">
                    <h4>案件預算：${Math.floor(result.budget)}</h4> {/* 使用 Math.floor() 來確保只顯示整數 */}
                </div>
            </div>
            <div className="flocation">地區：{result.location}</div>
            <TextLimit text={result.details} limit={72} />
            <div className="frequire">
                <p style={{ margin: '16px 4px' }}>需求語言：</p>
                <div>
                    <p>{result.require_code}</p>
                </div>
            </div>
        </div>
    );
};

export default CaseDetails;
