import React from 'react'
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';

function Card(props) {
    const review = props.review;
  return (
    <div className='flex flex-col md:relative justify-center items-center'>
        <div className='absolute top-[-7rem] left-[0]  mx-auto z-30'>
            <img className='aspect-square rounded-full  w-[140px] h-[140px] z-50' src={review.image} alt="" />
            <div className='w-[140px] h-[140px] bg-violet-600 rounded-full z-[-10] absolute top-[-0.5rem] left-[0.5rem]'></div>
        </div>
        <div className='text-center mt-7 '>
            <p className='font-bold text-2xl capitalize tracking-wider'>{review.name}</p>
        </div>
        <div className='text-center mt-1'>
            <p  className=' uppercase text-violet-300 font-semibold text-sm'>{review.job}</p>
        </div>
        <div className='text-center text-violet-500 mt-4'>
            <FaQuoteLeft />
        </div>
        <div className='text-center text-slate-600 mt-4'>
            <p>{review.text}</p>
        </div>
        <div className='text-center text-violet-500 mt-4'>
            <FaQuoteRight />
        </div>  
    </div>
  )
}

export default Card;

 
