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

import Info from '../pages/InfoData';
import InfoCasePub from '../pages/InfoCasePublish';
import InCase from '../pages/InfoCase';
import InfoCo from '../pages/InfoCollect';
import InfoClose from '../pages/InfoCloseCase';

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
            <Route path="/casemng" element={<CaseMng />} />
            <Route path="/seletaker" element={<SeleTaker />} />
            <Route path="/publish" element={<Publish />} />
            <Route path="/personal_editor" element={<Personal />} />
            <Route path="/*" element={<NotFound />} />

            <Route path="/infodata" element={<Info/>} /> {/* 案主頁面 */}
            <Route path="/infocasepub" element={<InfoCasePub/>} /> {/* 案主刊登案件 */}
            <Route path="/infocase" element={<InCase/>} /> {/* 案主案件審核 */}
            <Route path="/infocollect" element={<InfoCo/>} /> {/* 案主收藏 */}
            <Route path="/infoclosecase" element={<InfoClose/>} /> {/* 案主關閉 */}
        </Routes>
    );
};

export default Index;
