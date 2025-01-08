export const initializePersonalEditor = () => {
    const sidebarItems = document.querySelectorAll(".sidebar-item");
    const rowsContainer = document.getElementById("rows-container");
    const freelancerBtn = document.getElementById("freelancer-btn");

    // 右側內容對應
    const contentMapping = {
        "接案資料": `
            <div class="top-row">
                <div class="info-box">
                    <h3>案件訊息通知</h3>
                    <hr>
                    <ul>
                        <li><a href="#">獨立設計網站專案</a></li>
                        <li><a href="#">建立網頁開發項目</a></li>
                        <li><a href="#">圖形設計專案</a></li>
                    </ul>
                    <a href="#" class="more-link">...更多</a>
                </div>
                <div class="info-box">
                    <h3>系統通知 <span class="notification-icon">🔔</span></h3>
                    <hr>
                    <ul>
                        <li><a href="#">尚無通知</a></li>
                    </ul>
                </div>
            </div>
            <div class="bottom-row">
                <div class="info-box">
                    <h3>案件瀏覽紀錄 <span class="view-icon">👁️</span></h3>
                    <hr>
                    <ul>
                        <li><a href="#">專案一</a></li>
                        <li><a href="#">專案二</a></li>
                        <li><a href="#">專案三</a></li>
                    </ul>
                    <a href="#" class="more-link">...更多</a>
                </div>
                <div class="feedback-box">
                    <h3>問題回報</h3>
                    <hr>
                    <p>您對目前使用的服務滿意嗎？歡迎您提出建議或意見。</p>
                    <textarea placeholder="請在此輸入文字"></textarea>
                    <button type="submit" class="submit-btn">送出</button>
                </div>
            </div>
        `,

        "作品專區": `
        <div id="portfolio-content" class="info-box">
            <h3>作品專區</h3>
            <hr>
            <table class="portfolio-table">
                <thead>
                    <tr>
                        <th>作品圖片</th>
                        <th colspan="2">作品資訊</th> <!-- 合併網址與描述 -->
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody id="portfolio-rows">
                    <!-- 動態生成作品列 -->
                </tbody>
            </table>
            <div class="portfolio-actions">
                <button class="add-btn" id="add-portfolio-row">新增作品</button>
                <div class="pagination">
                    <button class="page-btn">1</button>
                    <button class="page-btn">2</button>
                    <button class="page-btn">3</button>
                </div>
            </div>
        </div>
        `,

        "我的刊登服務": `
    <div id="services-content" class="info-box">
        <h3>
            已刊登服務
        </h3>
        <hr>
        <table class="services-table">
            <thead>
                <tr>
                    <th><input type="checkbox" id="services-select-all"></th>
                    <th>服務標題</th>
                    <th>所在地</th>
                    <th>瀏覽數</th>
                    <th>刊登日期</th>
                    <th>狀態</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="checkbox" class="service-checkbox"></td>
                    <td>服務1</td>
                    <td>北部</td>
                    <td>300</td>
                    <td>2023/12/01</td>
                    <td>
                        <label class="switch">
                            <input type="checkbox" class="status-toggle">
                            <span class="slider round"></span>
                        </label>
                    </td>
                </tr>
                <tr>
                    <td><input type="checkbox" class="service-checkbox"></td>
                    <td>服務2</td>
                    <td>中部</td>
                    <td>150</td>
                    <td>2023/12/02</td>
                    <td>
                        <label class="switch">
                            <input type="checkbox" class="status-toggle">
                            <span class="slider round"></span>
                        </label>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
        `,

        "已收藏案件": `
    <div id="saved-jobs-content" class="info-box">
        <h3>
            已收藏案件
            <button type="button" class="delete-btn">刪除</button>
        </h3>
        <hr>
        <table class="saved-jobs-table">
            <thead>
                <tr>
                    <th><input type="checkbox" id="select-all"></th>
                    <th>名稱</th>
                    <th>所在地</th>
                    <th>預算</th>
                    <th>瀏覽數</th>
                    <th>收藏日期</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="checkbox" class="job-checkbox"></td>
                    <td>人名1</td>
                    <td>地區1</td>
                    <td>10000</td>
                    <td>300</td>
                    <td>2023/12/01</td>
                </tr>
                <tr>
                    <td><input type="checkbox" class="job-checkbox"></td>
                    <td>人名2</td>
                    <td>地區2</td>
                    <td>20000</td>
                    <td>500</td>
                    <td>2023/12/02</td>
                </tr>
            </tbody>
        </table>
    </div>
        `,

        "編輯個人資料": `
        <div id="profile-edit-content" class="info-box">
    <h3>基本資料<span class="required-hint">*為必填項目</span></h3>
    <hr>
    <form id="basic-info-form">
        <!-- 姓名 -->
        <div class="form-group">
            <label for="full-name">*姓名<input type="text" id="full-name" name="full-name" placeholder="請輸入您的姓名" required></label>
        </div>
        <hr>
        <!-- 接案暱稱 -->
        <div class="form-group">
            <label for="nickname">*接案暱稱<input type="text" id="nickname" name="nickname" placeholder="請輸入接案暱稱" required></label>
        </div>
        <hr>
        <!-- 接案狀態 -->
        <div class="form-group">
            <label>*接案狀態：</label>
            <div class="radio-group-stacked">
                <label><input type="radio" name="case-status" value="顯示聯絡資訊" required> 開啟，顯示聯絡資訊【全站案主皆能查看您的聯絡資訊，主動與您聯繫。】</label>
                <label><input type="radio" name="case-status" value="關閉聯絡資訊"> 關閉 【建議您開放檔案，增加更多外包洽談機會】</label>
            </div>
        </div>
        <hr>
        <!-- 接案身份 -->
        <div class="form-group">
            <label>*接案身份：</label>
            <div class="radio-group-inline">
                <label><input type="radio" name="identity" value="個人兼職" required> 個人兼職</label>
                <label><input type="radio" name="identity" value="專職SOHO"> 專職SOHO</label>
                <label><input type="radio" name="identity" value="工作室"> 工作室</label>
                <label><input type="radio" name="identity" value="兼職上班族"> 兼職上班族</label>
                <label><input type="radio" name="identity" value="公司"> 公司</label>
                <label><input type="radio" name="identity" value="學生"> 學生</label>
            </div>
        </div>
        <hr>
        <!-- 居住地區 -->
        <div class="form-group">
            <label for="region">*居住地區：<select id="region" name="region" required>
                <option value="">請選擇您的居住地區</option>
                <option value="north">北部</option>
                <option value="central">中部</option>
                <option value="south">南部</option>
                <option value="east">東部</option>
            </select></label>
        </div>
        <hr>
        <!-- 行動電話 -->
        <div class="form-group">
            <label for="phone">*行動電話：<input type="tel" id="phone" name="phone" placeholder="請輸入您的行動電話" required></label>
        </div>
        <hr>
        <!-- 電子郵件 -->
        <div class="form-group">
            <label for="email">*電子郵件：<input type="email" id="email" name="email" placeholder="請輸入您的電子郵件" required></label>
        </div>
        <hr>
        <!-- LINE ID -->
        <div class="form-group">
            <label for="line-id">LINE ID：<input type="text" id="line-id" name="line-id" placeholder="請輸入您的 LINE ID"></label>
        </div>
        <hr>
        <!-- 提交按鈕 -->
        <div class="submit-row">
            <button type="submit" class="submit-btn">儲存資料</button>
        </div>
    </form>
</div>

<div id="ideal-conditions" class="info-box">
    <h3>理想接案條件<span class="required-hint">*為必填項目</span></h3>
    <hr>
    <form id="ideal-conditions-form">
        <!-- 理想接案地區 -->
        <div class="form-group">
            <label for="ideal-region">*理想接案地區<select id="ideal-region" name="ideal-region" required>
                <option value="">請選擇理想接案地區：</option>
                <option value="north">北部</option>
                <option value="central">中部</option>
                <option value="south">南部</option>
                <option value="east">東部</option>
            </select></label>
        </div>
        <hr>
        <!-- 接案類別 -->
        <div class="form-group">
            <label for="ideal-category">*接案類別<select id="ideal-category" name="ideal-category" required>
                <option value="">請選擇理想接案類別</option>
                <option value="design">設計</option>
                <option value="development">開發</option>
                <option value="marketing">行銷</option>
                <option value="writing">寫作</option>
            </select></label>
            <span class="hint">【理想接案類別將顯示於個人工作室，可作為案主找尋人才時的重要依據】</span>
        </div>
        <hr>
        <!-- 提交按鈕 -->
        <div class="submit-row">
            <button type="submit" class="submit-btn">儲存條件</button>
        </div>
    </form>
</div>

<div id="case-experience" class="info-box">
                <h3>接案經歷</h3>
                <hr>
                <form id="case-experience-form">
                    <!-- 累積接案經驗 -->
                    <div class="form-group">
                        <label for="total-experience">累積接案經驗：
                            <select id="total-experience" name="total-experience">
                                <option value="">請選擇累積經驗：</option>
                                <option value="beginner">1-5 件</option>
                                <option value="intermediate">6-15 件</option>
                                <option value="advanced">16 件以上</option>
                            </select>
                        </label>
                    </div>
                    <hr>
                    <!-- 接案經驗條目 -->
                    <div class="form-group">
                        <label>接案經驗1：
                            <select name="experience-type-1">
                                <option value="">請選擇類型</option>
                                <option value="design">設計</option>
                                <option value="development">開發</option>
                                <option value="marketing">行銷</option>
                                <option value="writing">寫作</option>
                            </select>
                            <select name="experience-detail-1">
                                <option value="">請選擇細項</option>
                                <option value="web">網站設計</option>
                                <option value="graphic">平面設計</option>
                                <option value="seo">SEO 行銷</option>
                                <option value="content">內容寫作</option>
                            </select>
                            <button type="button" class="clear-btn">清除</button>
                        </label>
                    </div>
                    <button type="button" class="add-btn">新增</button>
                    <hr>
                    <!-- 提交按鈕 -->
                    <div class="submit-row">
                        <button type="submit" class="submit-btn">儲存經歷</button>
                    </div>
                </form>
            </div>
        `,
    };

    // 更新右側內容
    function refreshContent(itemName) {
        const topBarHTML = `
            <div class="top-bar">
                <div class="avatar-info">
                    <div class="avatar-upload">
                        <input type="file" id="avatarInput" accept="image/*" hidden>
                        <label for="avatarInput" class="avatar-box">
                            <img src="./img/Person/avatar.jpg" alt="大頭貼" class="avatar-img">
                        </label>
                    </div>
                    <div class="avatar-details">
                        <span>你好！XXXX</span>
                        <span>會員編號：XXXX</span>
                    </div>
                </div>
                <button class="top-bar-button">刊登新服務</button>
            </div>
        `;

        rowsContainer.innerHTML = topBarHTML + (contentMapping[itemName] || `
            <div class="info-box">
                <h3>${itemName}</h3>
                <hr>
                <p>暫無內容。</p>
            </div>
        `);

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

    // 點擊接案者按鈕
    freelancerBtn.addEventListener("click", () => {
        clearHighlight();
        refreshContent("接案資料");
        document.getElementById("case-info").classList.add("active");
    });

    // 頁面初始化
    function initializePage() {
        refreshContent("接案資料");
        document.getElementById("case-info").classList.add("active");
    }

    initializePage();
};
