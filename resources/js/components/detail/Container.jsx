import React from 'react';
import Maincontainer from './Maincontainer';
import Floatingbuttons from '../allpage/Floatingbuttons';

const Container = ({ item,  timeDifference }) => {
    
    return (
        <div>
            <div className="detailcontainer">
                <div></div>
                <Maincontainer item={item}  timeDifference={timeDifference} /> 
                <Floatingbuttons />
                <div></div>
            </div>
        </div>
    );
};

export default Container;
