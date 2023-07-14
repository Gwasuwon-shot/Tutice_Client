import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';

import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';

import styled from 'styled-components';

export default function TimePicker() {

    
    return (

        <TimePickerWrapper>

            <CancleWrapper>
                <CancleButton> 취소 </CancleButton>
            </CancleWrapper>

            <StyledSwiper
                direction="vertical"
                slidesPerView={7}
                freeMode={true}
                freeModeSticky={true}
                freeModeMomentumRatio={0.25}
                freeModeVelocityRatio={0.25}
                freeModeMinimumVelocity={0.1}
                mousewheelControl={true}
                mousewheelSensitivity={0.5}
                loop={true}
                loopAdditionalSlides={5}
                slideToClickedSlide={true}
                centeredSlides={true}
            >
                <SwiperSlide> 1 </SwiperSlide>
                <SwiperSlide> 2 </SwiperSlide>
                <SwiperSlide> 3 </SwiperSlide>
                <SwiperSlide> 4 </SwiperSlide>
                <SwiperSlide> 5 </SwiperSlide>
                <SwiperSlide> 6 </SwiperSlide>
                <SwiperSlide> 7 </SwiperSlide>
                <SwiperSlide> 8 </SwiperSlide>
                <SwiperSlide> 9 </SwiperSlide>
                <SwiperSlide> 10 </SwiperSlide>
                <SwiperSlide> 11 </SwiperSlide>
                <SwiperSlide> 12 </SwiperSlide>
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
        -webkit-tap-highlight-color: transparent;
    }
    
    & .swiper-slide-active {
        opacity: 1;
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