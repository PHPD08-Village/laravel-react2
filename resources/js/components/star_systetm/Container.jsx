import React, { useEffect } from 'react';

import StarSystem from './StarSystem'


const StarPage = () => {
    return (
        <div className="container">
            <StarSystem userId={7} caseId={14} />
            <Space />
        </div>
    );
}

export default StarPage;
