import React, { useEffect } from 'react';

import StarSystem from './StarSystem'
import Space from './Space'

const StarPage = () => {
    return (
        <div className="container">
            <StarSystem userId={1} caseId={15} />
            <Space />
        </div>
    );
}

export default StarPage;
