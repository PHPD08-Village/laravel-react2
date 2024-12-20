import React from 'react';

import Banner from './Banner'
import Home from './Home'
import Space from './Space'

const Homecontainer = () => (
    <>
        <Banner />
        <div className="container">
            <Home />
            <Space />
        </div>
    </>
);

export default Homecontainer;
