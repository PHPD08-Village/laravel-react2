import React, { useState, useEffect } from "react";
const FavoriteFreelance = () => {
    const [freelancers, setFreelancers] = useState([]);
    const [selectedFreelancers, setSelectedFreelancers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // 載入資料
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/freelancers")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                setFreelancers(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("載入失敗:", error);
                setError(error);
                setLoading(false);
            });
    }, []);
    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedFreelancers(freelancers.map((freeItem) => freeItem.id));
        } else {
            setSelectedFreelancers([]);
        }
    };
    const handleSelectFreelancers = (id) => {
        setSelectedFreelancers((prevSelected) =>
            prevSelected.includes(id)
                ? prevSelected.filter((freeId) => freeId !== id)
                : [...prevSelected, id]
        );
    };
    const handleDelete = async () => {
        if (selectedFreelancers.length === 0) {
            alert("請選擇要刪除的人才！");
            return;
        }
        // 彈出確認對話框
        const isConfirmed = window.confirm("確定要刪除選中的人才嗎？");

        if (!isConfirmed) {
            console.log("刪除已取消");
            return;  // 使用者選擇取消刪除，退出函式
        }
        try {
            const response = await fetch("/api/delete-freelancers", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ids: selectedFreelancers }),
            });
            if (response.ok) {
                const updatedFreelancers = freelancers.filter(
                    (freeItem) => !selectedFreelancers.includes(freeItem.id)
                );
                setFreelancers(updatedFreelancers);
                setSelectedFreelancers([]);
            } else {
                alert("刪除失敗，請稍後再試！");
            }
        } catch (error) {
            console.error("刪除請求失敗:", error);
        }
    };

    if (loading) {
        return <div>正在載入中... Loading...</div>;
    }
    // 日期顯示樣式
    const formatDate = (isoDate) => {
        const date = new Date(isoDate);
        return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    };

    return (
        <div className="info-box saved-jobs-content"> {/*id="saved-jobs-content"*/}
            <h3>
                已收藏人才
                <button type="button" className="delete-btn" onClick={handleDelete}>刪除</button>
            </h3>
            <hr />
            <table className="saved-jobs-table">
                <thead>
                    <tr>
                        <th><input
                            type="checkbox"
                            className="select-all"
                            onChange={handleSelectAll}
                            checked={
                                selectedFreelancers.length === freelancers.length &&
                                freelancers.length > 0
                            }
                        />
                        </th>
                        <th>名稱</th>
                        <th>所在地</th>
                        <th>身分</th>
                        <th>評價分數</th>
                        <th>收藏日期</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <tr>
                        <td><input type="checkbox" className="job-checkbox" /></td>
                        <td>案件1</td>
                        <td>地區1</td>
                        <td>10000</td>
                        <td>300</td>
                        <td>2023/12/01</td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" className="job-checkbox" /></td>
                        <td>案件2</td>
                        <td>地區2</td>
                        <td>20000</td>
                        <td>500</td>
                        <td>2023/12/02</td>
                    </tr> */}
                    {freelancers.map((freeItem) => (
                        <tr key={freeItem.id}>
                            <td>
                                <input
                                    type="checkbox"
                                    className="case-checkbox"
                                    checked={selectedFreelancers.includes(freeItem.id)}
                                    onChange={() => handleSelectFreelancers(freeItem.id)}
                                />
                            </td>
                            <td>{freeItem.user.username || "無"}</td>
                            <td>{freeItem.user.location || "無"}</td>
                            <td>{freeItem.user.job_title || "無"}</td>
                            <td>{freeItem.user.rating || "無"}</td>
                            <td>{formatDate(freeItem.created_at) || "無"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default FavoriteFreelance