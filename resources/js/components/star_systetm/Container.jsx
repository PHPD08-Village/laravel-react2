import React, { useEffect } from 'react';

import StarSystem from './StarSystem'
import Floatingbuttons from '../allpage/Floatingbuttons'

const StarPage = () => {
    return (
        <div className="container">
            <StarSystem userId={7} caseId={14} />
            <Floatingbuttons />
        </div>
    );
}

export default StarPage;
