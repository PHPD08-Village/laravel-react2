import axios from 'axios';

export const fetchData = async (setIsLoading, setData, setFilteredData, setError) => {
    setIsLoading(true);
    try {
        const response = await axios.get('/get-userinfo-publish');
        let data = response.data; // response.data 從後端獲取的資料

        // 確認資料結構
        // console.log("Fetched Data:", data);

        setData(data); // 初始化時顯示所有數據
        setFilteredData(data); // 初始化時顯示所有數據
    } catch (error) {
        setError('Error fetching data');
        console.error('Error fetching data', error);
    } finally {
        setIsLoading(false);
    }
};
