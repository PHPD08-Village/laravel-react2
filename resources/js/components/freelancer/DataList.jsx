import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import Star from './Star';

const DataList = ({ item, timeDifference }) => (
    <div className="fcontent">
        <div className="fcontent1">
            <Link to="/detail" className='link'>
                <div className="fhot"><img src="https://github.com/PHPD08-Village/PHPD08-Team/blob/main/img/Icon/Crown.png?raw=true" alt="hot" /></div>
                <div style={{ flex: 1 }}></div>
                <div className="fcompanyphoto">
                    <img src={item.headshot} alt={`${item.username}'s Headshot`} />
                </div>
                <div className="fcompanyname">
                    <h4 style={{ margin: '5px' }}>{item.username}</h4>
                </div>
                <div className="fcompanystar">
                    <div></div>
                    <div className="fgreen">
                        <img src="/img/Green Circle.png" alt="green" />
                    </div>
                    <div className="fstar">
                        <Star item={item} key={item.pid}/>
                    </div>
                </div>
            </Link>
        </div>
        <div className="fcontent2">
            <Link to="/detail" className='link'>
                <div className="ftitle">
                    <h1>{item.title}</h1>
                </div>
                <div className="fset">
                    <div className="fdate">
                        <h4>完成時間：{moment(item.completion_time).format('YYYY-MM-DD')}</h4>
                    </div>
                    <div className="fcaseprice">
                        <h4>案件預算：${Math.floor(item.budget)}</h4>
                    </div>
                </div>
                <div className="flocation">地區：{item.location}</div>
                <div className="fcasecontent">
                    描述內容{item.details}
                </div>
                <div className="frequire">
                    <p style={{ margin: '16px 4px' }}>需求語言：</p>
                    <div>
                        <p>{item.require_code}</p>
                    </div>
                </div>
            </Link>
        </div>
        <div className="fcontent3">
            <div className="ftime">{timeDifference(item.updated_at)}</div>
            <div className="fcontent3btn">
                <a className="fcollect" href="#">收藏</a>
                <a className="ftakecase" href="#">接案</a>
            </div>
            <div className="fpeople">0~5 人爭取中</div>
            <div className="ffrequency">7777 瀏覽次數</div>
            <div style={{ flex: 1.5 }}></div>
        </div>
    </div>
);

export default DataList;
