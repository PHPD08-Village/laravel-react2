import React from 'react';

import Banner from './Banner'
import Home from './Home'
import Floatingbuttons from '../allpage/Floatingbuttons'



const Homecontainer = () => (
    <>
        <Banner />
        <div className="container">
            <Home />
            <Floatingbuttons />
        </div>
    </>
);

export default Homecontainer;
