import React, { useState } from 'react';
import AccordionUi from './AccordionUi';
import './accordionUi.css'

const Accordion = () => {
    const accordionData = [

        {que: "What is Context API?", ans: "The Context API can be used to share data with multiple components, without having to pass data through props manually. For example, some use cases the Context API is ideal for: theming, user language, authentication, etc."},

        {que: "What is Semantic tag?", ans: "The core characteristic of a semantic element is that it clearly communicated its meaning to both the developer and the browser. These elements clearly define its content."},
        
        {que: "What is the difference between block and inline block elements?", ans: "Displays an element as an inline element. Any height and width properties will have no effect. and inline-block is Displays an element as an inline-level block container. You CAN set height and width values."}
    ];

        const [clicked, setClicked] = useState("0");

        const handleToggole = index => {
            if(clicked === index){
                return setClicked("0")
            }
            setClicked(index)
        };

    return (
        <div>
            <h2 style={{textAlign: "center"}}>Answer to the question</h2>

            <ul className='accordion' style={{padding: "0"}}>
                {
                    accordionData.map((data, i) => <AccordionUi 
                    active = {clicked === i}
                        onToggle = {() => handleToggole(i)}
                        data = {data}
                    ></AccordionUi>)
                }
            </ul>
        </div>
    );
};

export default Accordion;