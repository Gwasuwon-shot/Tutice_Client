import { RegisterLessonHeaderIc } from '../../assets';
import styled from 'styled-components';

export default function Header() {

    return (
    <>  
        <HeaderWrapper>
            <RegisterLessonHeaderIc />
            <InputHeader> 학생의 이름과 <br/> 과목을 입력해주세요. <Emphasis> * </Emphasis></InputHeader> 
            <InputNotice> 수업관리를 도와드릴 수 있도록 몇가지 정보를 알려주세요.</InputNotice>    
        </HeaderWrapper>
    </>
    );
}

const HeaderWrapper = styled.header`
    display: flex;
    flex-direction: column;
`

const InputHeader = styled.h1`
    display: flex;

    ${({ theme }) => theme.fonts.title1};
    color: ${({ theme }) => theme.colors.grey900};
`

const Emphasis = styled.span`
    ${({ theme }) => theme.fonts.title1};
    color: ${({ theme }) => theme.colors.green05};
`

const InputNotice = styled.h2`
    display: flex;
    ${({ theme }) => theme.fonts.body05};
    color: ${({ theme }) => theme.colors.grey600};
`

