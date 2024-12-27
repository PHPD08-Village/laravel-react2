import React, { useState } from 'react';

const TestSystem = () => {
    const [professionalRating, setProfessionalRating] = useState(0);
    const [replyRating, setReplyRating] = useState(0);
    const [cooperationRating, setCooperationRating] = useState(0);

    const starStyle = {
        display: 'inline-block',
        fontSize: '2em',
        color: 'gray',
        border: '1px dashed red', // 虛線紅色邊框
        borderRadius: '5px', // 圓角邊框
    };
    

    const starCheckedStyle = {
        color: 'gold',
    };

    return (
        <div className="rating">
            <div className="starPro">
                <p>對方專業度：</p>
                <div className="ratingStar">
                    {[5, 4, 3, 2, 1].map((value) => (
                        <label
                            key={value}
                            style={{ ...starStyle, ...(professionalRating >= value ? starCheckedStyle : {}) }}
                            onClick={() => setProfessionalRating(value)}
                        >
                            ★
                            <input
                                type="radio"
                                name="star1"
                                id={`star1${value}`}
                                value={value}
                                style={{ display: 'none' }}
                            />
                        </label>
                    ))}
                </div>
                <p>選擇的評分：{professionalRating}</p>
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

export default TestSystem