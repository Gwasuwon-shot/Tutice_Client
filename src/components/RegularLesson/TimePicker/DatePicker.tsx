import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';

import styled from 'styled-components';

export default function DatePicker() {
    
    const monthCalender = [];
    const weekDay: { [key: number]: string } = {1: '월', 2: '화', 3: '수', 4: '목', 5: '금', 6: '토', 0: '일'};

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const todayDate = currentDate.getDate();
    const todayDay = weekDay[currentDate.getDay()];

    // 1. 이전 달

    let prevMonth = currentMonth - 1;
    let prevYear = currentYear;

    if (prevMonth === 0) {
        prevMonth = 12
        prevYear = currentYear - 1;
    }

    const daysInPrevMonth = new Date(prevYear, prevMonth, 0).getDate();

    for (let i = 1; i <= daysInPrevMonth; i++) {
        const date = new Date(prevYear, prevMonth-1, i);
        const day = weekDay[date.getDay()];
        monthCalender.push({month: prevMonth, date: i, day: day});
    }

    // 2. 현재 달 

    const daysInMonth = new Date(currentYear, currentMonth, 0).getDate();

    for (let i = 1; i <= daysInMonth; i++) {
        const date = new Date(currentYear, currentMonth-1, i);
        const day = weekDay[date.getDay()];
        monthCalender.push({month: currentMonth, date: i, day: day});
    }

    // 3. 다음 달

    let nextMonth = currentMonth + 1;
    let nextYear = currentYear;
    if (nextMonth == 13) {
        nextMonth = 1;
        nextYear = currentYear + 1;
    }

    const daysInNextMonth = new Date(nextYear, nextMonth, 0).getDate();

    for (let i = 1; i <= daysInNextMonth; i++) {
        const date = new Date(nextYear, nextMonth-1, i);
        const day = weekDay[date.getDay()];
        monthCalender.push({month: nextMonth, date: i, day: day});
    }


    // 4. 날짜 관리

    const today = { month: currentMonth, date: todayDate, day: todayDay }

    const [activeSlide, setActiveSlide] = useState(today);

    const handleSlideChange = (swiper: Swiper) => {
        setActiveSlide(swiper.realIndex);
    };

    // check 용
    useEffect(() => {
        console.log(activeSlide);
    }, [activeSlide]);


    const slides = Array.from({ length: monthCalender.length }, (_, index) => (
        <SwiperSlide key={index}>
            <Month> {monthCalender[index].month} </Month>
            <Date> {monthCalender[index].date} </Date>
            <Day> {monthCalender[index].day} </Day>
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
`