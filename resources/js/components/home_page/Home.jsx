import React from 'react';

// import $ from 'jquery';

const Home = () => {
  return (
    // <!-- 案件頁面-- >
    <React.Fragment>
      <div className="mainContent">
        <h1>最新案件</h1>
        <div className="latestCase">
          {/* <!-- 左箭頭 --> */}
          <button id="latestCaseLeft">
            <ion-icon name="chevron-back-outline"></ion-icon>
          </button>
          <div className="card">
            {/* <!-- 每一個案件卡片 --> */}
            <div className="cardSingle">
              <div className="cardHeader">
                <div className="userInfo">
                  <img src="/img/Icon/Male User.png" alt="avatar" />
                  <div className="userName">
                    <div className="userNameText">
                      <h4>陳先生</h4>
                      <img src="/img/Icon/Green_Circle.png" alt="上線中" />
                    </div>
                    <div className="userStar">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <img src="/img/Icon/Star 5.png" alt="半顆星" />
                      <label id="starValue">4.5/5</label>
                      <label id="starValueTotal">(100)</label>
                    </div>
                  </div>
                </div>
                <label id="clickCount">666點閱率</label>
              </div>
              <div className="cardContent">
                <a href="#">獨立品牌設計</a>
                <ul className="caseInfo">
                  <li className="row">
                    <img src="/img/Icon/Us Dollar Circled.png" alt="dolar icon" />
                    <label>1,000 ~ 50,000</label>
                  </li>
                  <li className="row">
                    <img src="/img/Icon/Location.png" alt="location icon" />
                    <label>可遠端</label>
                  </li>
                  <li className="row">
                    <img src="/img/Icon/Time.png" alt="time icon" />
                    <label>無指定時間</label>
                  </li>
                </ul>
                <p>
                  1.需求設計專門logo 2.需要有資料庫建立 3.以藍色白色為主 4. 鴨子需要會飛 5.狗必須要有四隻腳 6.貓必須會叫 7.機車四個....更多
                </p>
              </div>
              <div className="cardFooter">
                <label>2024/12/12 更新</label>
                <button id="talk1" name="talk1">聊聊</button>
                <a href="#" id="catchCase1" name="catchCase1">接案</a>
              </div>
            </div>
            <div className="cardSingle">
              <div className="cardHeader">
                <div className="userInfo">
                  <img src="/img/Icon/Male User.png" alt="avatar" />
                  <div className="userName">
                    <div className="userNameText">
                      <h4>陳先生</h4>
                      <img src="/img/Icon/Green_Circle.png" alt="上線中" />
                    </div>
                    <div className="userStar">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <img src="/img/Icon/Star 5.png" alt="半顆星" />
                      <label id="starValue">4.5/5</label>
                      <label id="starValueTotal">(100)</label>
                    </div>
                  </div>
                </div>
                <label id="clickCount">666點閱率</label>
              </div>
              <div className="cardContent">
                <a href="#">獨立品牌設計</a>
                <ul className="caseInfo">
                  <li className="row">
                    <img src="/img/Icon/Us Dollar Circled.png" alt="dolar icon" />
                    <label>1,000 ~ 50,000</label>
                  </li>
                  <li className="row">
                    <img src="/img/Icon/Location.png" alt="location icon" />
                    <label>可遠端</label>
                  </li>
                  <li className="row">
                    <img src="/img/Icon/Time.png" alt="time icon" />
                    <label>無指定時間</label>
                  </li>
                </ul>
                <p>
                  1.需求設計專門logo 2.需要有資料庫建立 3.以藍色白色為主 4. 鴨子需要會飛 5.狗必須要有四隻腳 6.貓必須會叫 7.機車四個....更多
                </p>
              </div>
              <div className="cardFooter">
                <label>2024/12/12 更新</label>
                <button id="talk1" name="talk1">聊聊</button>
                <a href="#" id="catchCase1" name="catchCase1">接案</a>
              </div>
            </div>
            <div className="cardSingle">
              <div className="cardHeader">
                <div className="userInfo">
                  <img src="/img/Icon/Male User.png" alt="avatar" />
                  <div className="userName">
                    <div className="userNameText">
                      <h4>陳先生</h4>
                      <img src="/img/Icon/Green_Circle.png" alt="上線中" />
                    </div>
                    <div className="userStar">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <img src="/img/Icon/Star 5.png" alt="半顆星" />
                      <label id="starValue">4.5/5</label>
                      <label id="starValueTotal">(100)</label>
                    </div>
                  </div>
                </div>
                <label id="clickCount">666點閱率</label>
              </div>
              <div className="cardContent">
                <a href="#">獨立品牌設計</a>
                <ul className="caseInfo">
                  <li className="row">
                    <img src="/img/Icon/Us Dollar Circled.png" alt="dolar icon" />
                    <label>1,000 ~ 50,000</label>
                  </li>
                  <li className="row">
                    <img src="/img/Icon/Location.png" alt="location icon" />
                    <label>可遠端</label>
                  </li>
                  <li className="row">
                    <img src="/img/Icon/Time.png" alt="time icon" />
                    <label>無指定時間</label>
                  </li>
                </ul>
                <p>
                  1.需求設計專門logo 2.需要有資料庫建立 3.以藍色白色為主 4. 鴨子需要會飛 5.狗必須要有四隻腳 6.貓必須會叫 7.機車四個....更多
                </p>
              </div>
              <div className="cardFooter">
                <label>2024/12/12 更新</label>
                <button id="talk1" name="talk1">聊聊</button>
                <a href="#" id="catchCase1" name="catchCase1">接案</a>
              </div>
            </div>
          </div>
          {/* <!-- 右箭頭 --> */}
          <button id="latestCaseRight">
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </button>
        </div>
        <h1>點閱率最高案件</h1>
        <div className="clickHighestCase">
          {/* <!-- 左箭頭 --> */}
          <button id="clickHighestCaseLeft">
            <ion-icon name="chevron-back-outline"></ion-icon>
          </button>
          <div className="card">
            {/* <!-- 每一個案件卡片 --> */}
            <div className="cardSingle">
              <div className="cardHeader">
                <div className="userInfo">
                  <img src="/img/Icon/Male User.png" alt="avatar" />
                  <div className="userName">
                    <div className="userNameText">
                      <h4>陳先生</h4>
                      <img src="/img/Icon/Green_Circle.png" alt="上線中" />
                    </div>
                    <div className="userStar">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <img src="/img/Icon/Star 5.png" alt="半顆星" />
                      <label id="starValue">4.5/5</label>
                      <label id="starValueTotal">(100)</label>
                    </div>
                  </div>
                </div>
                <label id="clickCount">666點閱率</label>
              </div>
              <div className="cardContent">
                <a href="#">獨立品牌設計</a>
                <ul className="caseInfo">
                  <li className="row">
                    <img src="/img/Icon/Us Dollar Circled.png" alt="dolar icon" />
                    <label>1,000 ~ 50,000</label>
                  </li>
                  <li className="row">
                    <img src="/img/Icon/Location.png" alt="location icon" />
                    <label>可遠端</label>
                  </li>
                  <li className="row">
                    <img src="/img/Icon/Time.png" alt="time icon" />
                    <label>無指定時間</label>
                  </li>
                </ul>
                <p>
                  1.需求設計專門logo 2.需要有資料庫建立 3.以藍色白色為主 4. 鴨子需要會飛 5.狗必須要有四隻腳 6.貓必須會叫 7.機車四個....更多
                </p>
              </div>
              <div className="cardFooter">
                <label>2024/12/12 更新</label>
                <button id="talk1" name="talk1">聊聊</button>
                <a href="#" id="catchCase1" name="catchCase1">接案</a>
              </div>
            </div>
            <div className="cardSingle">
              <div className="cardHeader">
                <div className="userInfo">
                  <img src="/img/Icon/Male User.png" alt="avatar" />
                  <div className="userName">
                    <div className="userNameText">
                      <h4>陳先生</h4>
                      <img src="/img/Icon/Green_Circle.png" alt="上線中" />
                    </div>
                    <div className="userStar">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <img src="/img/Icon/Star 5.png" alt="半顆星" />
                      <label id="starValue">4.5/5</label>
                      <label id="starValueTotal">(100)</label>
                    </div>
                  </div>
                </div>
                <label id="clickCount">666點閱率</label>
              </div>
              <div className="cardContent">
                <a href="#">獨立品牌設計</a>
                <ul className="caseInfo">
                  <li className="row">
                    <img src="/img/Icon/Us Dollar Circled.png" alt="dolar icon" />
                    <label>1,000 ~ 50,000</label>
                  </li>
                  <li className="row">
                    <img src="/img/Icon/Location.png" alt="location icon" />
                    <label>可遠端</label>
                  </li>
                  <li className="row">
                    <img src="/img/Icon/Time.png" alt="time icon" />
                    <label>無指定時間</label>
                  </li>
                </ul>
                <p>
                  1.需求設計專門logo 2.需要有資料庫建立 3.以藍色白色為主 4. 鴨子需要會飛 5.狗必須要有四隻腳 6.貓必須會叫 7.機車四個....更多
                </p>
              </div>
              <div className="cardFooter">
                <label>2024/12/12 更新</label>
                <button id="talk1" name="talk1">聊聊</button>
                <a href="#" id="catchCase1" name="catchCase1">接案</a>
              </div>
            </div>
            <div className="cardSingle">
              <div className="cardHeader">
                <div className="userInfo">
                  <img src="/img/Icon/Male User.png" alt="avatar" />
                  <div className="userName">
                    <div className="userNameText">
                      <h4>陳先生</h4>
                      <img src="/img/Icon/Green_Circle.png" alt="上線中" />
                    </div>
                    <div className="userStar">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <img src="/img/Icon/Star 5.png" alt="半顆星" />
                      <label id="starValue">4.5/5</label>
                      <label id="starValueTotal">(100)</label>
                    </div>
                  </div>
                </div>
                <label id="clickCount">666點閱率</label>
              </div>
              <div className="cardContent">
                <a href="#">獨立品牌設計</a>
                <ul className="caseInfo">
                  <li className="row">
                    <img src="/img/Icon/Us Dollar Circled.png" alt="dolar icon" />
                    <label>1,000 ~ 50,000</label>
                  </li>
                  <li className="row">
                    <img src="/img/Icon/Location.png" alt="location icon" />
                    <label>可遠端</label>
                  </li>
                  <li className="row">
                    <img src="/img/Icon/Time.png" alt="time icon" />
                    <label>無指定時間</label>
                  </li>
                </ul>
                <p>
                  1.需求設計專門logo 2.需要有資料庫建立 3.以藍色白色為主 4. 鴨子需要會飛 5.狗必須要有四隻腳 6.貓必須會叫 7.機車四個....更多
                </p>
              </div>
              <div className="cardFooter">
                <label>2024/12/12 更新</label>
                <button id="talk1" name="talk1">聊聊</button>
                <a href="#" id="catchCase1" name="catchCase1">接案</a>
              </div>
            </div>
          </div>
          {/* <!-- 右箭頭 --> */}
          <button id="clickHighestCaseRight">
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </button>
        </div>
        <h1>最高評價接案者</h1>
        <div className="starHighestTaker">
          {/* <!-- 左箭頭 --> */}
          <button id="starHighestTakerLeft">
            <ion-icon name="chevron-back-outline"></ion-icon>
          </button>
          <div className="card">
            {/* <!-- 每一個案件卡片 --> */}
            <div className="cardSingle">
              <div className="cardHeader">
                <div className="imgGroup">
                  {/* <!-- <div className="backImg"></div> --> */}
                  <img className="backImg" src="/img/Person/083ab285feae1959eacd9c804923b293.jpg"
                    alt="user background img" />
                  <img className="avatar" src="/img/Person/f0af053eccfbe3fc956663721b368124.jpg"
                    alt="avatar" />
                </div>
                <div className="takerUserName">
                  <div className="userNameText">
                    <h4>陳先生</h4>
                    <img src="/img/Icon/Green_Circle.png" alt="上線中" />
                    <img className="keep" id="nokeep" src="/img/Icon/未收藏.png" alt="空心" />
                  </div>
                  <div className="userStar">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <img src="/img/Icon/Star 5.png" alt="半顆星" />
                    <label id="starValue">4.5/5</label>
                    <label id="starValueTotal">(100)</label>
                  </div>
                </div>
              </div>
              <div className="cardContent">
                <div className="quantityInfo">
                  <div id="workNum">
                    <label>作品：</label>
                    <a href="#">55</a>
                  </div>
                  <div id="successTimes">
                    <label>成交：</label>
                    <a href="#">20</a>
                  </div>
                  <div className="location">
                    <img src="/img/Icon/Location.png" alt="location icon" />
                    <label>可遠端</label>
                  </div>
                </div>
                <div className="codeLang">
                  <label>擅長語言：</label>
                  <div className="codeLangA">
                    <a href="#">HTML</a>
                    <a href="#">CSS</a>
                    <a href="#">C++</a>
                    <a href="#">Java</a>
                    <a href="#">PHP</a>
                  </div>
                </div>
              </div>
              <div className="cardFooter">
                <label>2024/12/12 更新</label>
                <button id="talk1" name="talk1">聊聊</button>
                <a href="#" id="entrust1" name="entrust1">委託</a>
              </div>
            </div>
            <div className="cardSingle">
              <div className="cardHeader">
                <div className="imgGroup">
                  {/* <!-- <div className="backImg"></div> --> */}
                  <img className="backImg" src="/img/Person/083ab285feae1959eacd9c804923b293.jpg"
                    alt="user background img" />
                  <img className="avatar" src="/img/Person/f0af053eccfbe3fc956663721b368124.jpg"
                    alt="avatar" />
                </div>
                <div className="takerUserName">
                  <div className="userNameText">
                    <h4>陳先生</h4>
                    <img src="/img/Icon/Green_Circle.png" alt="上線中" />
                    <img className="keep" id="nokeep" src="/img/Icon/未收藏.png" alt="空心" />
                  </div>
                  <div className="userStar">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <img src="/img/Icon/Star 5.png" alt="半顆星" />
                    <label id="starValue">4.5/5</label>
                    <label id="starValueTotal">(100)</label>
                  </div>
                </div>
              </div>
              <div className="cardContent">
                <div className="quantityInfo">
                  <div id="workNum">
                    <label>作品：</label>
                    <a href="#">55</a>
                  </div>
                  <div id="successTimes">
                    <label>成交：</label>
                    <a href="#">20</a>
                  </div>
                  <div className="location">
                    <img src="/img/Icon/Location.png" alt="location icon" />
                    <label>可遠端</label>
                  </div>
                </div>
                <div className="codeLang">
                  <label>擅長語言：</label>
                  <div className="codeLangA">
                    <a href="#">HTML</a>
                    <a href="#">CSS</a>
                    <a href="#">C++</a>
                    <a href="#">Java</a>
                    <a href="#">PHP</a>
                  </div>
                </div>
              </div>
              <div className="cardFooter">
                <label>2024/12/12 更新</label>
                <button id="talk1" name="talk1">聊聊</button>
                <a href="#" id="entrust1" name="entrust1">委託</a>
              </div>
            </div>
            <div className="cardSingle">
              <div className="cardHeader">
                <div className="imgGroup">
                  {/* <!-- <div className="backImg"></div> --> */}
                  <img className="backImg" src="/img/Person/083ab285feae1959eacd9c804923b293.jpg"
                    alt="user background img" />
                  <img className="avatar" src="/img/Person/f0af053eccfbe3fc956663721b368124.jpg"
                    alt="avatar" />
                </div>
                <div className="takerUserName">
                  <div className="userNameText">
                    <h4>陳先生</h4>
                    <img src="/img/Icon/Green_Circle.png" alt="上線中" />
                    <img className="keep" id="nokeep" src="/img/Icon/未收藏.png" alt="空心" />
                  </div>
                  <div className="userStar">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <img src="/img/Icon/Star 5.png" alt="半顆星" />
                    <label id="starValue">4.5/5</label>
                    <label id="starValueTotal">(100)</label>
                  </div>
                </div>
              </div>
              <div className="cardContent">
                <div className="quantityInfo">
                  <div id="workNum">
                    <label>作品：</label>
                    <a href="#">55</a>
                  </div>
                  <div id="successTimes">
                    <label>成交：</label>
                    <a href="#">20</a>
                  </div>
                  <div className="location">
                    <img src="/img/Icon/Location.png" alt="location icon" />
                    <label>可遠端</label>
                  </div>
                </div>
                <div className="codeLang">
                  <label>擅長語言：</label>
                  <div className="codeLangA">
                    <a href="#">HTML</a>
                    <a href="#">CSS</a>
                    <a href="#">C++</a>
                    <a href="#">Java</a>
                    <a href="#">PHP</a>
                  </div>
                </div>
              </div>
              <div className="cardFooter">
                <label>2024/12/12 更新</label>
                <button id="talk1" name="talk1">聊聊</button>
                <a href="#" id="entrust1" name="entrust1">委託</a>
              </div>
            </div>
          </div>
          {/* <!-- 右箭頭 --> */}
          <button id="starHighestTakerRight">
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </button>
        </div>
        <h1>最新消息與活動</h1>
        <div className="news">
          <a href="#">
            <label>2024 . 10 . 22</label> 快樂狗狗最新消息 貓咪聽說有四隻腳？！...更多
          </a>
          <a href="#">
            <label>2024 . 10 . 22</label> 快樂狗狗最新消息 貓咪聽說有四隻腳？！...更多
          </a>
          <a href="#">
            <label>2024 . 10 . 22</label> 快樂狗狗最新消息 貓咪聽說有四隻腳？！...更多
          </a>
          <a href="#">
            <label>2024 . 10 . 22</label> 快樂狗狗最新消息 貓咪聽說有四隻腳？！...更多
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;