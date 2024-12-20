import React from 'react';

const Space = () => (
    // <!-- space -->
    <div className="space">
        <div></div>
        <div>
            <div className='bgc'>
                <a href="#">
                    <div>
                        <img className="spacemember" src="https://github.com/PHPD08-Village/PHPD08-Team/blob/main/img/Icon/Male%20User.png?raw=true" alt="" />
                    </div>
                </a>
                <a href="#">
                    <img className="spacered" src="/img/Red.png" alt="" />
                    <img className="spacealarm" src="https://github.com/PHPD08-Village/PHPD08-Team/blob/main/img/Icon/Alarm.png?raw=true" alt="" />
                </a>
                <a href="#">
                    <img className="spacered" src="/img/Red.png" alt="" />
                    <img className="spacechat" src="https://github.com/PHPD08-Village/PHPD08-Team/blob/main/img/Icon/Chat%20Message.png?raw=true" alt="" />
                </a>
            </div>
            {/* <a href="#">
                <img className='toparraw' src={Arrow} alt="" />
            </a> */}
        </div>
    </div>
);

export default Space;
