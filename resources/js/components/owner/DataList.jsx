import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { IonIcon } from '@ionic/react';
import { checkbox, closeCircle } from 'ionicons/icons';
// import moment from 'moment';


import Star from './Star';
import FavoriteButton from './FavoriteButton';
import AssignmentButton from './AssignmentButton';


const DataList = ({ item, timeDifference, className }) => {
    const navigate = useNavigate();

    const handleNavigation = async () => {
        try {
            // 更新瀏覽次數
            const response = await axios.post('/click-count', { pid: item.pid, click_count: item.click_count + 1 });
            // console.log('Updated click count:', response.data.message);

            // 導航至詳細頁面
            navigate("/detail", { state: { pid: item.pid, timeDifference: timeDifference.toString() } });
        } catch (error) {
            console.error('Error updating view count:', error);
        }
    };

    return (
        <div className={`ocontent ${className}`}>
            <div className="ocontent1" onClick={() => navigate("/detail", { state: { pid: item.pid, timeDifference: timeDifference.toString() } })}>
                <div className="fhot"><img src="https://github.com/PHPD08-Village/PHPD08-Team/blob/main/img/Icon/Crown.png?raw=true" alt="hot" /></div>
                <div style={{ flex: 1 }}></div>
                <div className="ocompanyphoto">
                    <img src={item.headshot} alt={`${item.username}'s Headshot`} />
                </div>
                <div className="ocompanystar">
                    <div></div>
                    <div className="ogreen">
                        <img src="/img/Green Circle.png" alt="green" />
                    </div>
                    <div className="ostar">
                        <Star item={item} key={item.pid} />
                    </div>
                </div>
            </div>
            <div className="ocontent2" onClick={() => navigate("/personalinfo", { state: { pid: item.pid, timeDifference: timeDifference.toString() } })}>
                <div className="otitle">
                    <div>
                        <h1>{item.username}</h1>
                        <p>手機{item.phone_verified ? '已驗證' : '未驗證'}</p>
                        <IonIcon
                            icon={item.phone_verified ? checkbox : closeCircle}
                            color={item.phone_verified ? 'success' : 'danger'}
                        />
                        <p>信箱{item.email_verified ? '已驗證' : '未驗證'}</p>
                        <IonIcon
                            icon={item.email_verified ? checkbox : closeCircle}
                            color={item.email_verified ? 'success' : 'danger'}
                        />
                    </div>
                </div>
                <div className="oset">
                    <div className="odate">
                        <h4>工作年資：{item.accumulated_experience}</h4>
                    </div>
                    <div className="ocaseprice">
                    </div>
                </div>
                <div className="olocation">地區：{item.location}</div>
                <div className="ocasecontent">
                    描述內容：{item.details}
                </div>
                <div className="orequire">
                    <p style={{ margin: '16px 4px' }}>使用語言：</p>
                    <div>
                        <p>{item.require_code}</p>
                    </div>
                </div>
            </div>
            <div className="ocontent3">
                <div className="otime">{timeDifference(item.updated_at)}</div>
                <div className="ocontent3btn">
                    <FavoriteButton uid={item.uid} />
                    <AssignmentButton uid={item.uid} />
                </div>
                <div className="opeople">0~5 人爭取中</div>
                <div className="ofrequency">7777 瀏覽次數</div>
                <div style={{ flex: 1.5 }}></div>
            </div>
        </div>
    );
};

export default DataList;
