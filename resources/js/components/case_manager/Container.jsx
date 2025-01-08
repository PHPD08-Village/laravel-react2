import React from 'react';

import CaseManager from './CaseManager'
import Space from './Space'
import Floatingbuttons from '../allpage/Floatingbuttons';

const CaseMngcontainer = () => (
    <>
        <div className="container">
            <CaseManager />
            <Floatingbuttons />
        </div>
    </>
);

export default CaseMngcontainer;
