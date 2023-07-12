import {RegisterLessonHeaderIc} from '../../assets';
import styled from 'styled-components';

export default function Header() {

    return (

        <HeaderWrapper>
            <RegisterLessonHeaderIc />
            정기수업 일정 등록
        </HeaderWrapper>

    );
}

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    
    height: 3.1rem;

`

