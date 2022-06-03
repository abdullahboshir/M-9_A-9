import React from 'react';
import './accordionUi.css'

const AccordionUi = ({ data, active, onToggle }) => {

    const { ans, que } = data;
    return (
        <div className='accordion-container'>
            <li className={active ? "Active" : "nonActive"}>
                <button onClick={onToggle} className="acc-btn">
                    <div className='que-p'>
                        <p>{que}</p>
                        <span className={active ? "drop-down-on" : "drop-down-off"}>
                            {/* {active? "" : ""} */}
                        </span>
                    </div>
                </button>
                <div className={active ? "acc-ans" : "acc-ans-none"}>
                    <p>{ans}</p>
                </div>
            </li>
        </div>
    );
};

export default AccordionUi;