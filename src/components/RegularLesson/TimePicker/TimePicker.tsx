import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import {cycleNumberState, openTimePickerState} from '../../../atom/timePicker/timePicker';

import styled from 'styled-components';
import {useRecoilState} from 'recoil';

export default function TimePicker() {
    // [{'월':['12:00', '13:00']}, ]
    
    // 1. 회차 상태관리
    const [activeSlide, setActiveSlide] = useRecoilState(cycleNumberState);

    function handleSlideChange(swiper: SwiperCore) {
        setActiveSlide(swiper.realIndex + 1);
    };

    // 1) 회차 타임피커 모달 오픈여부 상태관리
    const [isTimePickerOpen, setIsTimePickerOpen] = useRecoilState<boolean>(openTimePickerState);
    
    // 2) 회차 타임피커 취소 시
    function handleCanCelTimePicker () {
        setIsTimePickerOpen(false);
        setActiveSlide(-1); // 선택이 안된 상태로 변경
    }

    // 3) 회차 타임피커 완료 시

    function handleConfirmTimePicker () {
        setIsTimePickerOpen(false);
    }
    
    // check 용
    useEffect(() => {
        console.log(activeSlide);
    }, [activeSlide]);

    const slides = Array.from({ length: 12 }, (_, index) => (
        <SwiperSlide key={index}>
          {index + 1}
        </SwiperSlide>
    ));

    
    return (

        <TimePickerWrapper>
            <CancleWrapper>
                <CancleButton onClick = {handleCanCelTimePicker}> 취소 </CancleButton>
            </CancleWrapper>

            <StyledSwiper
                direction="vertical"
                slidesPerView={7}
                spaceBetween={15}
                freeMode={true}
                freeModeSticky={true}
                freeModeMomentumRatio={0.25}
                freeModeMinimumVelocity={0.1}
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
                <ConfirmButton onClick= {handleConfirmTimePicker}> 확인 </ConfirmButton>
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
    position: absolute;
    top: 0.7rem;
    left: 1rem;
    
    ${({ theme }) => theme.fonts.body02};
    color: ${({ theme }) => theme.colors.grey400};
`

const ConfirmButton = styled.button`
    position: absolute;
    top: 0.7rem;
    right: 1rem;

    ${({ theme }) => theme.fonts.body02};
    color: ${({ theme }) => theme.colors.green5};
`

const Vizor = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;

    width: 5rem;
    height: 2rem;
    
    transform: translate(-50%, -50%);
    z-index : 100;
    opacity: 0.2;
    background-color: ${({ theme }) => theme.colors.grey200};
    border-radius: 20px;
`