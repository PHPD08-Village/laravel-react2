import React from 'react';
import Maincontainer from './Maincontainer'
import Floatingbuttons from '../allpage/Floatingbuttons'


const Container = () => (
    <div>
        {/* <!-- container --> */}
        <div className="detailcontainer">
            <div></div>
            <Maincontainer />
            <Floatingbuttons />
            <div></div>
        </div>
    </div>
);

export default Container;
