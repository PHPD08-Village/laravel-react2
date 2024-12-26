import React from 'react';
import Options from './Options'
// import Maincontainer from './Maincontainer'
import Maincontainer from './Maincontainer2'
import Floatingbuttons from '../allpage/Floatingbuttons'


const Container = () => (
    <div>
        {/* <!-- container --> */}
        <div className="container">
            <Options />
            <Maincontainer />
            <Floatingbuttons />
        </div>
    </div>
);

export default Container;
