import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';

import styled from 'styled-components';

export default function TimePicker() {
    const [activeSlide, setActiveSlide] = useState(0);

    const handleSlideChange = (swiper) => {
        setActiveSlide(swiper.realIndex);
        console.log(activeSlide);
    };

    const slides = Array.from({ length: 12 }, (_, index) => (
        <SwiperSlide key={index} value={index + 1}>
          {index + 1}
        </SwiperSlide>
      ));
    
    return (

        <TimePickerWrapper>

            <CancleWrapper>
                <CancleButton> 취소 </CancleButton>
            </CancleWrapper>

            <StyledSwiper
                direction="vertical"
                slidesPerView={7}
                spaceBetween={15}
                freeMode={true}
                freeModeSticky={true}
                freeModeMomentumRatio={0.25}
                freeModeMinimumVelocity={0.1}
                mousewheelSensitivity={0.5}
                loop={true}
                loopAdditionalSlides={5}
                slideToClickedSlide={true}
                centeredSlides={true}
                onSlideChange = {handleSlideChange}
            >
                {slides}
            </StyledSwiper>
            <Vizor />
            
            <ConfirmWrapper>
                <ConfirmButton> 확인 </ConfirmButton>
            </ConfirmWrapper>
        </TimePickerWrapper>

    );
}


const TimePickerWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
    height: 13rem;
    background-color: ${({ theme }) => theme.colors.grey20};
`

const StyledSwiper = styled(Swiper)`
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 6rem;
    height: 9.5rem;
    ${({ theme }) => theme.fonts.body02};
    color: ${({ theme }) => theme.colors.grey400};
    background-color: ${({ theme }) => theme.colors.grey20};

    & .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        vertical-align: center;
        opacity: 0.4;
        cursor: pointer;
        transition: opacity 0.3s ease;
    }
    
    & .swiper-slide-active {
        opacity: 1;
        color: ${({ theme }) => theme.colors.grey700};
    }
`    

const CancleWrapper = styled.div`
    display: flex;
    position: relative;
    width: 6rem; 
    height: 100%;
`

const ConfirmWrapper = styled.div`
    display: flex;
    position: relative;
    width: 6rem; 
    height: 100%;
`
const CancleButton = styled.button`
    ${({ theme }) => theme.fonts.body02};
    color: ${({ theme }) => theme.colors.grey400};
    position: absolute;
    top: 0.7rem;
    left: 1rem;
`

const ConfirmButton = styled.button`
    ${({ theme }) => theme.fonts.body02};
    color: ${({ theme }) => theme.colors.green5};
    position: absolute;
    top: 0.7rem;
    right: 1rem;
`

const Vizor = styled.div`
    border: 1px solid #ccc;

    width: 5rem;
    height: 2rem;

    position: absolute;
    
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index : 100;
    
    opacity: 0.2;
    background-color: ${({ theme }) => theme.colors.grey200};
`