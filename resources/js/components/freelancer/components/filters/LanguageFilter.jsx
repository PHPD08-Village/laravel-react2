// freelancer2/components/filters/LanguageFilter.jsx
import React, { useContext } from 'react';
import { FreelancerContext } from '../../FreelancerProvider';

const LanguageFilter = () => {
    const { buttonKeywords, setButtonKeywords, filterData, keywords } = useContext(FreelancerContext);

    const handleLanguageClick = (language) => {
        const newButtonKeywords = buttonKeywords.includes(language)
            ? buttonKeywords.filter((keyword) => keyword !== language)
            : [...buttonKeywords, language];
        setButtonKeywords(newButtonKeywords);
        filterData([...keywords, ...newButtonKeywords]);
    };

    const isSelected = (language) => buttonKeywords.includes(language);

    return (
        <div>
            <h2>篩選條件</h2>
            <hr />
            <h3>程式分類</h3>
            <div className="fkeywords">
                <button
                    className={isSelected('HTML') ? 'selected' : ''}
                    onClick={() => handleLanguageClick('HTML')}
                    style={{ background: isSelected('HTML') ? 'orange' : '' }}
                >
                    HTML
                </button>
                <button
                    className={isSelected('CSS') ? 'selected' : ''}
                    onClick={() => handleLanguageClick('CSS')}
                    style={{ background: isSelected('CSS') ? 'orange' : '' }}
                >
                    CSS
                </button>
                <button
                    className={isSelected('JavaScript') ? 'selected' : ''}
                    onClick={() => handleLanguageClick('JavaScript')}
                    style={{ background: isSelected('JavaScript') ? 'orange' : '' }}
                >
                    JavaScript
                </button>
                <button
                    className={isSelected('C#') ? 'selected' : ''}
                    onClick={() => handleLanguageClick('C#')}
                    style={{ background: isSelected('C#') ? 'orange' : '' }}
                >
                    C#
                </button>
                <button
                    className={isSelected('C++') ? 'selected' : ''}
                    onClick={() => handleLanguageClick('C++')}
                    style={{ background: isSelected('C++') ? 'orange' : '' }}
                >
                    C++
                </button>
                <button
                    className={isSelected('UI') ? 'selected' : ''}
                    onClick={() => handleLanguageClick('UI')}
                    style={{ background: isSelected('UI') ? 'orange' : '' }}
                >
                    UI
                </button>
                <button
                    className={isSelected('UX') ? 'selected' : ''}
                    onClick={() => handleLanguageClick('UX')}
                    style={{ background: isSelected('UX') ? 'orange' : '' }}
                >
                    UX
                </button>
                <button
                    className={isSelected('Python') ? 'selected' : ''}
                    onClick={() => handleLanguageClick('Python')}
                    style={{ background: isSelected('Python') ? 'orange' : '' }}
                >
                    Python
                </button>
                <button
                    className={isSelected('SQL') ? 'selected' : ''}
                    onClick={() => handleLanguageClick('SQL')}
                    style={{ background: isSelected('SQL') ? 'orange' : '' }}
                >
                    SQL
                </button>
                <button
                    className={isSelected('Java') ? 'selected' : ''}
                    onClick={() => handleLanguageClick('Java')}
                    style={{ background: isSelected('Java') ? 'orange' : '' }}
                >
                    Java
                </button>
                <button
                    className={isSelected('PHP') ? 'selected' : ''}
                    onClick={() => handleLanguageClick('PHP')}
                    style={{ background: isSelected('PHP') ? 'orange' : '' }}
                >
                    PHP
                </button>
            </div>
        </div>
    );
};

export default LanguageFilter;