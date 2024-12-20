import React from 'react'

function StarSystem() {
    return (
        <div className="mainContent">
            <div className="pathLink">
                <img src="/img/Icon/Start.png" alt="icon" />
                <a href="#">我的案件</a>
                <label htmlFor=""> &gt; </label>
                <a href="#">評價回饋</a>
            </div>

            {/* 評價區塊 */}
            <form action="" method='' className="ratingSystem">
                <div className="explain">
                    <h2>評價接案者</h2>
                    <ul>
                        <li>
                            交易完成後，您可以給予「優良」、「普通」或「差勁」的評價，並留下意見評語。
                        </li>
                        <li>
                            「優良」代表五顆星、「普通」代表三顆星、「差勁」代表一顆星。
                        </li>
                        <li>
                            評價一旦送出便無法修改，請謹慎給予。
                        </li>
                        <li>
                            所有評價都會記錄在會員的「評價頁面」，供其他會員做參考。
                        </li>
                    </ul>
                </div>
                <hr />
                <div className="staruserInfo">
                    <img src="/img/Icon/Male User.png" alt="avatar" />
                    <div className="staruserInfoText">
                        <h3 id="caseName" name="caseName">獨立品牌網頁設計</h3>
                        <p id="userName" name="userName">陳曉白快樂工作室</p>
                        <p id="caseDate" name="caseDate">2024/10/30</p>
                    </div>
                </div>
                <div className="rating">
                    <div className="starPro">
                        <p>對方專業度：</p>
                        <div className="ratingStar">
                            <input type="radio" name="star1" id="star15" value="5" />
                            <label htmlFor="star15"></label>
                            <input type="radio" name="star1" id="star14" value="4" />
                            <label htmlFor="star14"></label>
                            <input type="radio" name="star1" id="star13" value="3" />
                            <label htmlFor="star13"></label>
                            <input type="radio" name="star1" id="star12" value="2" />
                            <label htmlFor="star12"></label>
                            <input type="radio" name="star1" id="star11" value="1" />
                            <label htmlFor="star11"></label>
                        </div>
                    </div>
                    <div className="starReply">
                        <p>對方回覆速度：</p>
                        <div className="ratingStar">
                            <input type="radio" name="star2" id="star25" value="5" />
                            <label htmlFor="star25"></label>
                            <input type="radio" name="star2" id="star24" value="4" />
                            <label htmlFor="star24"></label>
                            <input type="radio" name="star2" id="star23" value="3" />
                            <label htmlFor="star23"></label>
                            <input type="radio" name="star2" id="star22" value="2" />
                            <label htmlFor="star22"></label>
                            <input type="radio" name="star2" id="star21" value="1" />
                            <label htmlFor="star21"></label>
                        </div>
                    </div>
                    <div className="starCoor">
                        <p>對方整體配合度：</p>
                        <div className="ratingStar">
                            <input type="radio" name="star3" id="star35" value="5" />
                            <label htmlFor="star35"></label>
                            <input type="radio" name="star3" id="star34" value="4" />
                            <label htmlFor="star34"></label>
                            <input type="radio" name="star3" id="star33" value="3" />
                            <label htmlFor="star33"></label>
                            <input type="radio" name="star3" id="star32" value="2" />
                            <label htmlFor="star32"></label>
                            <input type="radio" name="star3" id="star31" value="1" />
                            <label htmlFor="star31"></label>
                        </div>
                    </div>
                    <p>(評價一旦送出便無法修改，請謹慎給予)</p>
                </div>
                <button type='submit' id="submitStar" name="submitStar">送出</button>
            </form>
        </div>
    )
}

export default StarSystem