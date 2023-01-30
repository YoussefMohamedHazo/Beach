import React,{useState} from 'react'
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';

const sliderData = [
  {
    url: 'https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  },
];
const Slider = () => {
  const [currentIndex, setcurrentIndex] = useState(0);

  const pre = () => {
    const isFirst = currentIndex==0
    const newindex = isFirst? sliderData.length -1 : currentIndex -1
    setcurrentIndex(newindex)
  }

  const next = () => {
    const isLast = currentIndex == sliderData.length -1
    const newindex = isLast? 0 : currentIndex +1
    setcurrentIndex(newindex)
  }

  
  return (
    <div className=' max-w-screen-lg mx-auto py-16 px-4 h-[600px] relative'>
      <div className=' duration-500 w-full h-full rounded-2xl bg-cover bg-center ' style={{backgroundImage:`url(${sliderData[currentIndex].url})`}}></div>

      <div onClick={pre} className=' absolute top-[50%] -translate-x-0 translate-y-[-50%] left-6 text-2xl rounded-full cursor-pointer text-white/90 '><BsArrowLeftSquareFill size={30}/> </div>
      <div onClick={next} className=' absolute top-[50%] -translate-x-0 translate-y-[-50%] right-6 text-2xl rounded-full cursor-pointer text-white/90 '><BsArrowRightSquareFill size={30}/> </div>
      
    </div>
  )
}

export default Slider
