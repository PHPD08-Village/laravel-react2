import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from './UserProvider';

const Breadcrumb = () => {
    const { userRole, section  } = useUser();

    return (
        <div className="breadcrumb">
            <img src="./img/Icon/Start.png" alt="" />
            <Link to="/">首頁</Link><img src="./img/Icon/Forward.png" alt="" />
            <Link to="#">我是{userRole}</Link><img src="./img/Icon/Forward.png" alt="" />
            <span>{section}</span>
        </div>
    );
};

export default Breadcrumb;
