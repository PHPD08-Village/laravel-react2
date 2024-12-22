import React, { useEffect } from 'react';

import StarSystem from './StarSystem'
import Space from './Space'

const StarPage = () => {
    return (
        <div className="container">
            <StarSystem userId={2} />
            <Space />
        </div>
    );
}

export default StarPage;
