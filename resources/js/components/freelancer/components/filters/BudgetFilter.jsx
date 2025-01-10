// freelancer2/components/filters/BudgetFilter.jsx
import React, { useContext, useState } from 'react';
import { FreelancerContext } from '../../FreelancerProvider';
import { Range, getTrackBackground } from 'react-range';

const BudgetFilter = () => {
    const { buttonKeywords, setButtonKeywords, filterData, keywords } = useContext(FreelancerContext);
    const [values, setValues] = useState([0, 1000000]);

    const STEP = 100;
    const MIN = 0;
    const MAX = 1000000;

    const applyBudgetFilter = () => {
        const budgetRange = `budget-${values[0]}-${values[1]}`;
        const newButtonKeywords = buttonKeywords.filter(keyword => !keyword.startsWith('budget-'));
        setButtonKeywords([...newButtonKeywords, budgetRange]);
        filterData([...keywords, ...newButtonKeywords, budgetRange]);
    };

    return (
        <>
            <div className="fprice">
                <h3>案件預算</h3>
                <div className="budget-filter">
                    <label>預算區間：0 ~ 1,000,000</label><br />
                    <Range  className="slider-container"
                        values={values}
                        step={STEP}
                        min={MIN}
                        max={MAX}
                        onChange={setValues}
                        onFinalChange={applyBudgetFilter}
                        renderTrack={({ props, children }) => {
                            const { key, ...restProps } = props;
                            return (
                                <div
                                    {...restProps}
                                    key={key}
                                    style={{
                                        ...props.style,
                                        height: '6px',
                                        width: '100%',
                                        background: getTrackBackground({
                                            values,
                                            colors: ['#ccc', '#548BF4', '#ccc'],
                                            min: MIN,
                                            max: MAX
                                        }),
                                        alignSelf: 'center'
                                    }}
                                >
                                    {children}
                                </div>
                            );
                        }}
                        renderThumb={({ props }) => {
                            const { key, ...restProps } = props;
                            return (
                                <div
                                    {...restProps}
                                    key={key}
                                    style={{
                                        ...props.style,
                                        height: '24px',
                                        width: '24px',
                                        borderRadius: '12px',
                                        backgroundColor: '#548BF4',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                >
                                    <div
                                        style={{
                                            height: '16px',
                                            width: '5px',
                                            backgroundColor: '#fff'
                                        }}
                                    />
                                </div>
                            );
                        }}
                    /> <br />
                    <div className="values">
                        <span>最小預算：{values[0]}</span>
                        <span>最大預算：{values[1]}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BudgetFilter;
