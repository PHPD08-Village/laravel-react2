import React from 'react';
import Options from './Options copy'
import Maincontainer from './Maincontainer copy'
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
