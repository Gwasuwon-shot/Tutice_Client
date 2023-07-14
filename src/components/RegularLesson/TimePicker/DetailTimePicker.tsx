import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';

import styled from 'styled-components';

export default function DetailTimePicker() {
    
    // 1. 오전 오후 관리
    // 1) active slide 값 관리
    const [activeAmPmSlide, setActiveAmPmSlide] = useState('오전');
    const handleAmPmSlideChange = (swiper: Swiper) => {
        setActiveAmPmSlide(swiper.realIndex);
    };

    // check 용
    useEffect(() => {
        console.log(activeAmPmSlide);
    }, [activeAmPmSlide]);

    // 2) swiper
    const AmPm = ['오전', '오후'];
    const slidesAmPm = Array.from({ length: 2 }, (_, index) => (
        <SwiperSlide key={index}>
          {AmPm[index]}
        </SwiperSlide>
    ));

    // 2. 시간 관리
    // 1) active slide 값 관리
    const [activeHourSlide, setActiveHourSlide] = useState(0);
    const handleHourSlideChange = (swiper: Swiper) => {
        setActiveHourSlide(swiper.realIndex);
    };

    // check 용
    useEffect(() => {
        console.log(activeHourSlide);
    }, [activeHourSlide]);

    // 2) swiper
    const slidesHour = Array.from({ length: 12 }, (_, index) => (
        <SwiperSlide key={index}>
          {index + 1}
        </SwiperSlide>
    ));
    
    // 3. 분 관리
    // 1) active slide 값 관리
    const [activeMinuteSlide, setActiveMinuteSlide] = useState(0);
    const handleMinuteSlideChange = (swiper: Swiper) => {
        setActiveMinuteSlide(swiper.realIndex);
    };

    // check 용
    useEffect(() => {
        console.log(activeMinuteSlide);
    }, [activeMinuteSlide]);

    // 2) swiper
    const slidesMinute = Array.from({ length: 2 }, (_, index) => (
        <SwiperSlide key={index}>
          {index * 30}
        </SwiperSlide>
    ));
    
    return (

        <TimePickerWrapper>

            <CancleWrapper>
                <CancleButton> 취소 </CancleButton>
            </CancleWrapper>

            <SwiperWrapper>
                <StyledSwiper
                    direction="vertical"
                    slidesPerView={7}
                    spaceBetween={15}
                    freeMode={true}
                    freeModeSticky={true}
                    freeModeMomentumRatio={0.25}
                    freeModeMinimumVelocity={0.1}
                    slideToClickedSlide={true}
                    centeredSlides={true}
                    onSlideChange = {handleAmPmSlideChange}
                >
                    {slidesAmPm}
                </StyledSwiper>

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
                    onSlideChange = {handleHourSlideChange}
                >
                    {slidesHour}
                </StyledSwiper>

                <StyledSwiper
                    direction="vertical"
                    slidesPerView={7}
                    spaceBetween={15}
                    freeMode={true}
                    freeModeSticky={true}
                    freeModeMomentumRatio={0.25}
                    freeModeMinimumVelocity={0.1}
                    slideToClickedSlide={true}
                    centeredSlides={true}
                    onSlideChange = {handleMinuteSlideChange}
                >
                    {slidesMinute}
                </StyledSwiper>
                <Vizor />
            </SwiperWrapper>

            <ConfirmWrapper>
                <ConfirmButton> 확인 </ConfirmButton>
            </ConfirmWrapper>
        </TimePickerWrapper>

    );
}


const TimePickerWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: relative;
    
    height: 13rem;
    
    background-color: ${({ theme }) => theme.colors.grey20};
`

const SwiperWrapper = styled.div`
    display: flex;
`

const StyledSwiper = styled(Swiper)`
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 3rem;
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

    width: 13.6rem;
    height: 2rem;
    
    transform: translate(-50%, -50%);
    z-index : 100;
    opacity: 0.2;
    background-color: ${({ theme }) => theme.colors.grey200};
`