import React from 'react';
import moment from 'moment';

const Maincontainer = ({ item, timeDifference }) => {
    return (
        <div className='detail'>
            <div className='detailtab'>
                <h3>首頁&ensp; &gt; &ensp;我要接案&ensp; &gt; &ensp;{item.title}</h3>
            </div>
            <div className='casedetail'>
                <div className='descrip'>
                    <div className='casedescrip'>
                        <div className='title'>
                            <h1>{item.title}</h1>
                            {/* <p>{timeDifference(item.updated_at)}</p> */}
                            <p>{moment(item.updated_at).format('YYYY.MM.DD')}更新</p>
                        </div>
                        <hr />
                        <div className='regulation'>
                            <p>預算金額：${Math.floor(item.budget)}</p>
                            <p>執行地點：{item.location}</p>
                            <p>預計完成日：{item.completion_time ? moment(item.completion_time).format('YYYY-MM-DD') : '無指定時間'}</p>
                        </div>
                        <hr />
                        <div className='description'>
                            <h4>案件說明：</h4>
                            <p>{item.details}</p>
                        </div>
                    </div>
                    <div className="information">
                        <h3>案主資訊</h3>
                        <hr />
                        <div>
                            <img src={item.headshot} alt={`${item.username}'s Headshot`} />
                            <p>{item.username}</p>
                        </div>
                        <p>{item.email}</p>
                        {/* <p>回覆率：??%</p>  */}
                        {/* {item.reply_rate} */}
                        {/* <p>最後上線時間：??前</p> */}
                        <div className="detailbtn">
                            <div><a href="#">收藏</a></div>
                            <div><a href="#">接案</a></div>
                        </div>
                    </div>
                </div>
                <div className='remind'>
                    <h4>※提醒：</h4>
                    <h4>1.雙方避免私下交易，預防詐騙與合作糾紛，否則產生任何問題，出任務將無法保障您的權益。</h4>
                    <h4>2.為保障交易安全，建議使用「合約管理」進行交易。</h4>
                </div>
            </div>
        </div>
    )
}

export default Maincontainer;






