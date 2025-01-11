import React, { useEffect } from 'react';
import { initializeScrollTopButton, initializeFormSubmission } from '../../JS or jQuery/floatingbuttons';

const Floating = () => {

  useEffect(() => {
    initializeScrollTopButton();
    initializeFormSubmission();
  }, []);

  return (
    // <!-- 懸浮按鈕區域 -->
    <div className="space">
      <div></div>
      <div className="floating-buttons">
        <button className="floating-btn" id="scroll-top-btn" title="返回頂部">
          <img src="/img/Icon/Upward Arrow.png" alt="返回頂部" />
        </button>
      </div>
    </div>
  )
}

export default Floating