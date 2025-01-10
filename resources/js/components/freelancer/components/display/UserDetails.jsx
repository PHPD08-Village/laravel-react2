// freelancer2/components/display/UserDetails.jsx
// 與使用者相關數據

import React from 'react';
import Star from './Star';

const UserDetails = ({ result, handleNavigation }) => {
    // console.log(result.headshot);
    
    return (
        <div className="fcontent1" onClick={() => handleNavigation(result)}>
            <div className="fhot"><img src="/img/Icon/Crown.png" alt="hot" /></div>
            <div style={{ flex: 1 }}></div>
            <div className="fcompanyphoto">
                <img src={result.headshot} alt={`${result.username || 'User'}'s Headshot`} />
            </div>
            <div className="fcompanyname">
                <h4 style={{ margin: '5px' }}>{result.username}</h4>
            </div>
            <div className="fcompanystar">
                <div></div>
                <div className="fgreen">
                    <img src="/img/Green Circle.png" alt="green" />
                </div>
                {result.averating && (
                    <div className="fstar">
                        <Star result={result} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserDetails;
