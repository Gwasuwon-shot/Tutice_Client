import {RegisterLessonHeaderIc} from '../../assets';
import { TuticeWithTextCommonIc } from "../../assets";
import styled from 'styled-components';

export default function Header() {

    return (

        <HeaderWrapper>
            <RegisterLessonHeaderIcon />
            <HeaderName> 정기수업 일정 등록 </HeaderName>
        </HeaderWrapper>

    );
}

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    
    position: relative;
    
    height: 5rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey50}
`

const HeaderName = styled.h1`
    display: flex;
    
    ${({ theme }) => theme.fonts.body01};
    color: ${({ theme }) => theme.colors.grey900};
`
const RegisterLessonHeaderIcon = styled(RegisterLessonHeaderIc)`
    position: absolute;
    top: 0.8rem;
    left: 0rem;
    width: 4rem;
    height: 4rem;
`;
