import React from 'react'

const SSystem = () => {
    return (
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
    )
}

export default SSystem