import React, { useState } from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import { ApiSlider } from '../api/SliderApi';
import styled from 'styled-components';

const Slider = () => {

  const [slides] = useState(ApiSlider)
  const [activeSlide, setActiveSlide] = useState(1)

  const nextSlide = () => {
    if (activeSlide === slides.length - 1) {
      setActiveSlide(0)
    } else {
      setActiveSlide(activeSlide + 1)
    }
  }

  const privSlide = () => {
    if (activeSlide === 0) {
      setActiveSlide(slides.length - 1)
    } else {
      setActiveSlide(activeSlide - 1)
    }
  }

  const arrowStyle = "rounded-full bg-grey flex justify-center items-center shadow-sm hover:cursor-pointer"

  const StyledSlideAnimation = styled.div`
  .wrapper {
    -webkit-animation-name: fade;
    -webkit-animation-duration: 2s;
    animation-name: fade;
    animation-duration: 2s;
  }
    @-webkit-keyframes fade {
      from { opacity: .4 }
      to { opacity: 1 }
    }
    @keyframes fade {
      from { opacity: .6 }
      to { opacity: 1 }
    }
  `

  return (
    <div className='parentDiv h-[540px] bg-white flex items-center justify-between'>
      <div className={arrowStyle}>
        <ArrowLeftOutlined style={{ fontSize: '50px' }} onClick={privSlide}/>
      </div>
      {slides.map((slide, index) => {
        if(index === activeSlide) {
          return (
            <StyledSlideAnimation>
            <div className={`wrapper flex w-[100%] h-[500px] justify-center items-center shadow-2xl
       rounded-lg border-[#c0c0c0] border-10px overflow-hidden relative ` + slide.background}>
              <div className="slide flex items-center justify-center h-[100%]">
                <div className='forImage flex flex-1 justify-center items-center h-[100%]'>
                  <img
                    className='h-[100%] object-cover'
                    src={slide.src}
                    alt='slider'
                  />
                </div>
                <div className="desc flex flex-col flex-1 place-items-start justify-center ml-6">
                  <h2 className='text-[55px]'>{slide.content.h2}</h2>
                  <p className='text-[30px]'>{slide.content.p}</p>
                  <button className='btn mt-4'>Shop Now</button>
                </div>
              </div>
            </div>
            </StyledSlideAnimation>
          )
        }
      })}
      <div className={arrowStyle}>
        <ArrowRightOutlined style={{ fontSize: '50px' }} onClick={nextSlide}/>
      </div>
    </div>
  );
};

export default Slider;