import React from 'react';

import { useUser } from './UserProvider';
import EditProfile from './EditPage/EditProfile'

import CaseInformation from './EditPage/freelancer/CaseInformation'
import Portfolio from './EditPage/freelancer/Portfolio'
import Myservice from './EditPage/freelancer/Myservice'
import FavoriteCass from './EditPage/freelancer/FavoriteCass'

import Review from './EditPage/owner/Review'
import Publishe from './EditPage/owner/Publishe'
import CaseState from './EditPage/owner/CaseState'
import FavoriteFreelance from './EditPage/owner/FavoriteFreelance'

const Edit = () => {
    const { section } = useUser();

    return (
        <>
            {/* 共用 */}
            {section === '編輯個人資料' ? <EditProfile /> : ''}

            {/* 以下為接案者 */}
            {section === '接案資料' ? <CaseInformation /> : ''}
            {section === '作品專區' ? <Portfolio /> : ''}
            {section === '我的刊登服務' ? <Myservice /> : ''}
            {section === '已收藏案件' ? <FavoriteCass /> : ''}

            {/* 以下為業主 */}
            {section === '審核中' ? <Review /> : ''}
            {section === '刊登中' ? <Publishe /> : ''}
            {section === '已完成/已關閉案件' ? <CaseState /> : ''}
            {section === '已收藏人才' ? <FavoriteFreelance /> : ''}
        </>
    );
};

export default Edit;
