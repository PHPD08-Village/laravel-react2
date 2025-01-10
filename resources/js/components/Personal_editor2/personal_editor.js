export const initializePersonalEditor = () => {
    console.log("Personal editor initialized");
    const sidebarItems = document.querySelectorAll(".sidebar-item");

    // 更新右側內容
    function refreshContent(itemName) {

        // 初始化接案經歷的清除和新增功能
        const caseExperienceForm = document.getElementById("case-experience-form");
        if (caseExperienceForm) {
            let experienceCount = 1;

            caseExperienceForm.addEventListener("click", (e) => {
                if (e.target.classList.contains("clear-btn")) {
                    const parentGroup = e.target.closest(".form-group");
                    const selects = parentGroup.querySelectorAll("select");
                    selects.forEach((select) => (select.value = ""));
                }

                if (e.target.classList.contains("add-btn")) {
                    experienceCount++;
                    const newGroup = document.createElement("div");
                    newGroup.className = "form-group";
                    newGroup.innerHTML = `
                        <label>接案經驗 ${experienceCount}：
                            <select name="experience-type-${experienceCount}">
                                <option value="">請選擇類型</option>
                                <option value="design">設計</option>
                                <option value="development">開發</option>
                                <option value="marketing">行銷</option>
                                <option value="writing">寫作</option>
                            </select>
                            <select name="experience-detail-${experienceCount}">
                                <option value="">請選擇細項</option>
                                <option value="web">網站設計</option>
                                <option value="graphic">平面設計</option>
                                <option value="seo">SEO 行銷</option>
                                <option value="content">內容寫作</option>
                            </select>
                            <button type="button" class="clear-btn">清除</button>
                        </label>
                    `;
                    caseExperienceForm.querySelector(".add-btn").before(newGroup);
                }
            });
        }

        // 初始化已收藏案件的全选和删除功能
        const savedJobsContent = document.getElementById("saved-jobs-content");
        if (savedJobsContent) {
            const selectAllCheckbox = savedJobsContent.querySelector("#select-all");
            const deleteButton = savedJobsContent.querySelector(".delete-btn");

            // 全选功能
            selectAllCheckbox.addEventListener("change", () => {
                const jobCheckboxes = savedJobsContent.querySelectorAll(".job-checkbox");
                jobCheckboxes.forEach((checkbox) => {
                    checkbox.checked = selectAllCheckbox.checked;
                });
            });

            // 删除勾选的行
            deleteButton.addEventListener("click", () => {
                const jobCheckboxes = savedJobsContent.querySelectorAll(".job-checkbox");
                jobCheckboxes.forEach((checkbox) => {
                    if (checkbox.checked) {
                        const row = checkbox.closest("tr");
                        row.remove();
                    }
                });

                // 取消全选状态
                selectAllCheckbox.checked = false;
            });
        }

        const servicesContent = document.getElementById("services-content");
        if (servicesContent) {
            const selectAllCheckbox = servicesContent.querySelector("#services-select-all");
            const serviceCheckboxes = servicesContent.querySelectorAll(".service-checkbox");
            const statusToggles = servicesContent.querySelectorAll(".status-toggle");
            const toggleAllButton = document.createElement("button"); // 統一開關的按鈕

            toggleAllButton.textContent = "統一開啟/關閉";
            toggleAllButton.className = "toggle-all-btn";
            servicesContent.prepend(toggleAllButton);

            // 全選功能
            selectAllCheckbox.addEventListener("change", () => {
                serviceCheckboxes.forEach((checkbox) => {
                    checkbox.checked = selectAllCheckbox.checked;
                });
            });

            // 點擊統一開關按鈕時切換所有狀態
            toggleAllButton.addEventListener("click", () => {
                const allChecked = Array.from(serviceCheckboxes).some((checkbox) => checkbox.checked);

                if (!allChecked) {
                    alert("請先選擇要更改的服務！");
                    return;
                }

                // 判斷當前服務狀態（第一個被選中的服務的狀態）
                const shouldEnable = Array.from(serviceCheckboxes)
                    .filter((checkbox) => checkbox.checked)
                    .some((checkbox) => {
                        const row = checkbox.closest("tr");
                        return !row.querySelector(".status-toggle").checked;
                    });

                // 更新選中的服務狀態
                serviceCheckboxes.forEach((checkbox) => {
                    if (checkbox.checked) {
                        const row = checkbox.closest("tr");
                        const toggle = row.querySelector(".status-toggle");
                        toggle.checked = shouldEnable;
                    }
                });

                const action = shouldEnable ? "開啟" : "關閉";
                alert(`所有選中的服務已統一${action}！`);
            });
        }
        // 初始化作品專區功能
        if (itemName === "作品專區") {
            const addRowButton = document.getElementById("add-portfolio-row");
            const tableBody = document.getElementById("portfolio-rows");

            function addPortfolioRow() {
                const row = document.createElement("tr");
                row.innerHTML = `
                        <td>
                            <label>
                                <input type="file" class="icon-upload" accept="image/*" hidden>
                                <img src="./img/placeholder.png" class="icon-preview" alt="點擊上傳圖片">
                            </label>
                        </td>
                        <td class="portfolio-url-cell">
                            <input type="text" class="portfolio-url" placeholder="輸入作品網址">
                        </td>
                        <td class="portfolio-description-cell">
                            <textarea class="portfolio-description" placeholder="輸入作品描述"></textarea>
                        </td>
                        <td class="portfolio-actions-cell">
                            <button class="save-btn">儲存</button>
                            <button class="delete-btn">刪除</button>
                        </td>
                    `;

                // 圖片上傳預覽功能
                row.querySelector(".icon-upload").addEventListener("change", (e) => {
                    const file = e.target.files[0];
                    if (file) {
                        const preview = row.querySelector(".icon-preview");
                        preview.src = URL.createObjectURL(file);
                    }
                });

                // 刪除列功能
                row.querySelector(".delete-btn").addEventListener("click", () => {
                    row.remove();
                });

                tableBody.appendChild(row);
            }

            // 綁定新增按鈕
            addRowButton.addEventListener("click", addPortfolioRow);
        }

    }

    // 清除高亮樣式
    function clearHighlight() {
        sidebarItems.forEach((item) => {
            item.classList.remove("active");
        });
    }

    // 點擊左側項目處理邏輯
    sidebarItems.forEach((item) => {
        item.addEventListener("click", () => {
            const itemName = item.textContent.trim();
            clearHighlight();
            item.classList.add("active");
            refreshContent(itemName);
        });
    });

    // 頁面初始化
    function initializePage() {
        refreshContent("接案資料");
        document.getElementById("case-info").classList.add("active");
    }

    initializePage();
};
