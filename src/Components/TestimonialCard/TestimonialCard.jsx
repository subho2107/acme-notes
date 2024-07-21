import React from "react";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
const TestimonialCard = ({testimonialGive, nameOfPerson, index}) => {
    return (
        <div className={`gap-20 relative shadow-lg z-50 p-20 rounded-lg justify-center items-center w-[30rem] h-[36rem] flex flex-col bg-gradient-to-b ${index % 2 == 1 ? 'from-[#252161] via-[#dd4a94]  to-[#252161]': 'from-[#f06a9a] via-[#f8b09e]  to-[#b25280]'}`}>
            <FormatQuoteIcon className={`${index % 2 == 1 ? 'text-white': 'text-purple-950'} scale-[4]`}/>
            <p className={`text-lg ${index % 2 == 1 ? 'text-white': 'text-purple-950'} text-center font-serif`}>{testimonialGive}</p>
            <span className={`text-lg ${index % 2 == 1 ? 'text-white': 'text-purple-950'} font-bold font-mono`}>{nameOfPerson}</span>
        </div>
    );
}

export default TestimonialCard;