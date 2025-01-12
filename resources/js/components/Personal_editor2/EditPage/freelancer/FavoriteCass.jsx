import React, { useState, useEffect } from "react";

const FavoriteCass = () => {

    const [cases, setCases] = useState([]);
    const [selectedCases, setSelectedCases] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // 載入資料
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/cases")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                setCases(data);
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
            setSelectedCases(cases.map((caseItem) => caseItem.id));
        } else {
            setSelectedCases([]);
        }
    };
    const handleSelectCase = (id) => {
        setSelectedCases((prevSelected) =>
            prevSelected.includes(id)
                ? prevSelected.filter((caseId) => caseId !== id)
                : [...prevSelected, id]
        );
    };
    const handleDelete = async () => {
        if (selectedCases.length === 0) {
            alert("請選擇要刪除的案件！");
            return;
        }
    try {
        const response = await fetch("/api/delete-cases", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ids: selectedCases }),
        });
        if (response.ok) {
            const updatedCases = cases.filter(
                (caseItem) => !selectedCases.includes(caseItem.id)
            );
            setCases(updatedCases);
            setSelectedCases([]);
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
    // 不顯示小數點
    const formatBudget = (budget) => parseInt(budget, 10);

    return (
        <div id="saved-jobs-content" className="info-box">
            <h3>
                已收藏案件
                <button type="button" className="delete-btn" onClick={handleDelete}>刪除</button>
            </h3>
            <hr />
            <table className="saved-jobs-table">
                <thead>
                    <tr>
                        <th><input 
                            type="checkbox" 
                            id="select-all"
                            onChange={handleSelectAll}
                            checked={
                                selectedCases.length === cases.length &&
                                cases.length > 0
                            }
                         />
                        </th>
                        <th>名稱</th>
                        <th>所在地</th>
                        <th>預算</th>
                        <th>瀏覽數</th>
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
                     {cases.map((caseItem) => (
                        <tr key={caseItem.id}>
                            <td>
                                <input
                                    type="checkbox"
                                    className="case-checkbox"
                                    checked={selectedCases.includes(caseItem.id)}
                                    onChange={() => handleSelectCase(caseItem.id)}
                                />
                            </td>
                            <td>{caseItem.publish.title || "無"}</td>
                            <td>{caseItem.publish.location || "無"}</td>
                            <td>{formatBudget(caseItem.publish.budget) || "無"}</td>
                            <td>{caseItem.publish.click_count || "無"}</td>
                            <td>{formatDate(caseItem.created_at) || "無"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default FavoriteCass