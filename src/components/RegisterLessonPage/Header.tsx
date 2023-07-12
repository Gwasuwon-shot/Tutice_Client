import { RegisterLessonHeaderIc } from '../../assets';
import styled from 'styled-components';

export default function Header() {

    return (
    
        <HeaderWrapper>
            <RegisterLessonHeaderIc />
            <InputHeader> 학생의 이름과 <br/> 과목을 입력해주세요. <Emphasis> * </Emphasis> </InputHeader> 
            <InputNotice> 수업관리를 도와드릴 수 있도록 몇가지 정보를 알려주세요.</InputNotice>    
        </HeaderWrapper>

    );
}

const HeaderWrapper = styled.header`
    display: flex;
    flex-direction: column;
    
    height: 15.8rem;
    margin-top: 2rem;
`

const InputHeader = styled.div`
    display: flex;
    
    margin-top: 2.2rem;
    margin-left: 1.6rem;
    
    ${({ theme }) => theme.fonts.title01};
    color: ${({ theme }) => theme.colors.grey900};
`

const Emphasis = styled.span`
    display: flex;
    align-items: flex-end;
    
    ${({ theme }) => theme.fonts.title01};
    color: ${({ theme }) => theme.colors.green5};
`

const InputNotice = styled.h2`
    display: flex;
    
    margin-top: 1.1rem;
    margin-left: 1.6rem;
    
    ${({ theme }) => theme.fonts.body05};
    color: ${({ theme }) => theme.colors.grey600};
`

