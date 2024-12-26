import React, { useRef } from 'react';
import Options from './Options';
import Maincontainer from './Maincontainer';
import Floatingbuttons from '../allpage/Floatingbuttons';

const Container = () => {
    const searchboxRef = useRef();

    const handleKeywordClick = (keyword) => {
        if (searchboxRef.current) {
            searchboxRef.current.addKeywordFromOutside(keyword);
        }
    };

    return (
        <div>
            {/* <!-- container --> */}
            <div className="container">
                <Options onKeywordClick={handleKeywordClick} />
                <Maincontainer ref={searchboxRef} />
                <Floatingbuttons />
            </div>
        </div>
    );
};

export default Container;
