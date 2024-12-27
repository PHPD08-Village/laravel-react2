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
import Publish from '../pages/Publish';
import CaseMng from '../pages/CaseManager';
import SeleTaker from '../pages/SeleTaker';

import Testform from '../pageslab/TestForm';
import Publish2 from '../pageslab/Publish2';
import TastExtract from '../pageslab/TestExtract';
import Testfree from '../pageslab/Testfree';
import TestPusher from '../pageslab/TestPusher';
import TestPostForm from '../pageslab/TestPostForm';
import Testuser from '../pageslab/Testuser';
import TestSystem from '../pageslab/TestSystem';

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
            <Route path="/casemng" element={<CaseMng />} />
            <Route path="/seletaker" element={<SeleTaker />} />
            <Route path="/publish" element={<Publish />} />{/* TestForm 頁面 */}
            <Route path="/personal_editor" element={<Personal />} />
            <Route path="/*" element={<NotFound />} />

            <Route path="/form" element={<Testform />} />{/* TestForm 頁面 */}
            <Route path="/publish2" element={<Publish2 />} />{/* TestForm 頁面 */}
            <Route path="/extract" element={<TastExtract />} />
            <Route path="/testfree" element={<Testfree />} />
            <Route path="/testfreelance" element={<Testfreelance />} />
            <Route path="/testsearchbox" element={<Testsearchbox />} />
            <Route path="/testpusher" element={<TestPusher />} />
            <Route path="/testpostform" element={<TestPostForm />} />
            <Route path="/testuser" element={<Testuser />} />
            <Route path="/testsystem" element={<TestSystem />} />
        </Routes>
    );
};

export default Index;
