import React from 'react';
import Maincontainer from './Maincontainer'
import Space from './Space'


const Container = () => (
    <div>
        {/* <!-- container --> */}
        <div className="detailcontainer">
            <div></div>
            <Maincontainer />
            <Space />
            <div></div>
        </div>
    </div>
);

export default Container;
