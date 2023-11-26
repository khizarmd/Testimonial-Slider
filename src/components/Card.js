import React from 'react';
import {FaQuoteLeft,FaQuoteRight} from "react-icons/fa";

const Card = (props) => {
  let review = props.review
 
    return (
    <div className='md:relative flex flex-col '>
            <div className='absolute top-[-7rem] z-10 mx-auto'>
                <img
                className='aspect-square rounded-full w-[140px] h-[140px] z-[1]'
                 src={review.image} alt=""/>
                 <div className='w-[140px] h-[140px] bg-violet-500 rounded-full
                 absolute top-[-6px] z-[-1] left-[10px] '></div>
            </div>
            <div className='text-center mt-7 '>
                <p className='font-bold text-3xl capitalize leading-7 '>{review.name}</p>
                <p className='uppercase text-sm text-violet-400 mt-2'>{review.job}</p>
            </div>
           
            <div className='text-violet-400 mx-auto mt-5'>
                <FaQuoteLeft/>
            </div>
            <div className='mt-4 text-center text-slate-500'>
                     {review.text}
            </div>
            
            <div className='text-violet-400 mx-auto mt-5'>
                <FaQuoteRight/>
            </div>
           
    </div>
  )
}

export default Card