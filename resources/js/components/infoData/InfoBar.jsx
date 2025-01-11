import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

function InfoBar({ userId }) {
  const [userdata, setUserdata] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/userdata/1`); //${userId}
        if (response.status === 200) {
          setUserdata(response.data);
          console.log('Fetched user:', response.data);
        } else {
          throw new Error('Oops! 發生錯誤!');
        }
        setLoading(false);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching user:', error);
        setLoading(false);
      }
    };
    fetchUser();
  }, [userId]);

  if (loading) {
    return <div>正在載入中... Loading...</div>;
  }


  return (
    <div className="rightColOne">
    <div>
        <img src={userdata.data.headshot || "./imgs/dphoto.jpg"} onError={(e) => (e.target.src = "./imgs/dphoto.jpg")} alt="大頭照" />
    </div>
    <div>
        <span>你好！ {userdata.data.username || "使用者！"}</span>
        <span>會員編號：0000{userdata.data.uid || "XXX"}</span>
    </div>
    <div>
        <Link to="/publish" className="alink">
            <img src="./imgs/file.png" alt="" />
            <span>刊登新案件</span>
        </Link>
    </div>
</div>
  )
}

export default InfoBar