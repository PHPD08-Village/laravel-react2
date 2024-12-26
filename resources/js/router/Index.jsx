import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/HomePage';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Freelancer from '../pages/Freelancer';
import Owner from '../pages/Owner';
import Detail from '../pages/Detail';
import PersonalInfo from '../pages/PersonalInfo';
import Star from '../pages/StarPage';
import Publish from '../pages/Publish';
import Personal from '../pages/Personal_editor';
import NotFound from '../pages/NotfoundPage';

import Testform from '../pageslab/TestForm';
import Publish2 from '../pageslab/Publish2';
import TastExtract from '../pageslab/TestExtract';
import Testfree from '../pageslab/Testfree';
import Testfreelance from '../pageslab/Testfreelance';
import Testsearchbox from '../pageslab/Testsearchbox';

const Index = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/freelancer" element={<Freelancer />} />
            <Route path="/owner" element={<Owner />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/personalinfo" element={<PersonalInfo />} />
            <Route path="/star" element={<Star />} />
            <Route path="/publish" element={<Publish />} />{/* TestForm 頁面 */}
            <Route path="/personal_editor" element={<Personal />} />
            <Route path="/*" element={<NotFound />} />

            <Route path="/form" element={<Testform />} />{/* TestForm 頁面 */}
            <Route path="/publish2" element={<Publish2 />} />{/* TestForm 頁面 */}
            <Route path="/extract" element={<TastExtract />} />
            <Route path="/testfree" element={<Testfree />} />
            <Route path="/testfreelance" element={<Testfreelance />} />
            <Route path="/testsearchbox" element={<Testsearchbox />} />
        </Routes>
    );
};

export default Index;
