import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/HomePage';
import Freelancer from '../pages/Freelancer';
import Owner from '../pages/Owner';
import Detail from '../pages/Detail';
import Personal from '../pages/PersonalInfo';
import Star from '../pages/StarPage';
import NotFound from '../pages/NotfoundPage';
import Publish from '../pages/Publish';

import Testform from '../pageslab/TestForm';
import Publish2 from '../pageslab/Publish2';
import TastExtract from '../pageslab/TestExtract';
import Testfree from '../pageslab/Testfree';

const Index = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/freelancer" element={<Freelancer />} />
            <Route path="/owner" element={<Owner />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/personalinfo" element={<Personal />} />
            <Route path="/star" element={<Star />} />
            <Route path="/publish" element={<Publish />} />{/* TestForm 頁面 */}
            <Route path="/*" element={<NotFound />} />

            <Route path="/form" element={<Testform />} />{/* TestForm 頁面 */}
            <Route path="/publish2" element={<Publish2 />} />{/* TestForm 頁面 */}
            <Route path="/extract" element={<TastExtract />} />
            <Route path="/testfree" element={<Testfree />} />
        </Routes>
    );
};

export default Index;
