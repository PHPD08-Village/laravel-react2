import React, { useEffect } from 'react';

import StarSystem from './StarSystem'
import Space from './Space'

const StarPage = () => {
    return (
        <div className="container">
            <StarSystem userId={7} caseId={14} />
            <Space />
        </div>
    );
}

export default StarPage;
