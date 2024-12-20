import React from 'react'

function Banner() {
    return (
        <div className="banner">
            <div className="bannerWorker">
                <h1>讓你的技能找到最佳舞台</h1>
                <h3>Where Your Skills Shine Brightest</h3>
                <div>
                    <a id="findCase" name="findCase" href="/freelancer">立即接案</a>
                    <img src="/img/Person/Worker.png" className="worker" alt="Worker Banner" />
                </div>
            </div>

            <div className="bannerBoss">
                <h1>打造專業團隊成就卓越專案</h1>
                <h3>Build a Professional Team to Achieve Exceptional Projects</h3>
                <div>
                    <img src="/img/Person/BOSS.png" className="boss" alt="Boss Banner" />
                    <a id="findTaker" name="findTaker" href="/owner">立即委託</a>
                </div>
            </div>
        </div>
    )
}

export default Banner;