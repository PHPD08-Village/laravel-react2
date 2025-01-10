// import React, { createContext, useContext, useState, useEffect } from 'react';
// import axios from 'axios';
// import { useAuth } from '../auth/AuthContext'; // 引入 useAuth

// const UserContext = createContext(); // 創建上下文
// export const useUser = () => useContext(UserContext); // 自訂的 hook 來使用上下文

// export const UserProvider = ({ children }) => {
//     const { user } = useAuth(); // 使用 useAuth 來取得 user 狀態
//     const [userData, setUserData] = useState();
//     // const [userData, setUserData] = useState(() => {
//     //     // 初始化時從本地存儲加載數據
//     //     const savedUserData = localStorage.getItem('userData');
//     //     return savedUserData ? JSON.parse(savedUserData) : null;
//     // });
//     const [loading, setLoading] = useState(!userData); // 如果本地有數據，則不顯示載入中
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             if (user) { // 確認已登入且本地沒有數據
//                 try {
//                     const response = await axios.get('/personal-info');
//                     const data = response.data;
//                     console.log('data:', data);
//                     // localStorage.setItem('userData', JSON.stringify(data)); // 存儲到本地存儲中
//                     setUserData(data); // 保存獲取的數據
//                 } catch (error) {
//                     setError('Error fetching data');
//                     console.error('Error fetching data:', error);
//                 } finally {
//                     setLoading(false);
//                 }
//             } else {
//                 setLoading(false);
//             }
//         };
//         fetchData();
//     }, [user]);

//     if (loading) {
//         return <h2>載入中...</h2>; // 顯示載入中訊息
//     }
    
//     if (error) {
//         return <h2>{error}</h2>; // 顯示錯誤訊息
//     }
    
//     if (!user) {
//         return <h2>尚未登入無法獲取資料</h2>; // 顯示未登入訊息
//     }

//     return (
//         <UserContext.Provider value={{ user, userData }}>
//             {children}
//         </UserContext.Provider>
//     );
// };

// export default UserProvider;
