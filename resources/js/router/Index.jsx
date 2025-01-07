import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/HomePage';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Forgot from '../pages/Forgot';
import Freelancer from '../pages/Freelancer';
import Owner from '../pages/Owner';
import Detail from '../pages/Detail';
import PersonalInfo from '../pages/PersonalInfo';
import Star from '../pages/StarPage';
import Publish from '../pages/Publish';
import Personal from '../pages/Personal_editor';
import CaseMng from '../pages/CaseManager';
import SeleTaker from '../pages/SeleTaker';
import NotFound from '../pages/NotfoundPage';

import CheckUserStatus from '../components/auth/CheckUserStatus';
import TestForm from '../pages/TestForm';
import TestForm2 from '../pages/TestForm2';

const Index = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot" element={<Forgot />} />
            <Route path="/freelancer" element={<Freelancer />} />
            <Route path="/owner" element={<Owner />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/personalinfo" element={<PersonalInfo />} />
            <Route path="/star" element={<Star />} />
            <Route path="/case_manager" element={<CaseMng />} />
            <Route path="/select_taker" element={<SeleTaker />} />
            <Route path="/publish" element={<Publish />} />{/* TestForm 頁面 */}
            <Route path="/personal_editor" element={<Personal />} />
            <Route path="/*" element={<NotFound />} />

            <Route path="/checkuserstatus" element={<CheckUserStatus />} />
            <Route path="/testForm" element={<TestForm />} />
            <Route path="/testForm2" element={<TestForm2 />} />
        </Routes>
    );
};

export default Index;
