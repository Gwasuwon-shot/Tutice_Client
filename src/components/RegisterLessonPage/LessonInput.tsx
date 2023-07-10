import styled from 'styled-components';

export default function LessonInput() {

    let studentName;
    let lessonName;
    
    return (
        
    <InputWrapper>

        <InputSection>
            <InputName> 학생이름 </InputName> 
            <StudentInput type = 'text' placeholder = '이름을 입력하세요'/>
        </InputSection>

        <InputSection>
            <InputName> 과목 </InputName>
            <SubjectInput type = 'text' placeholder = '수업과목을 입력하세요' />
        </InputSection>

    
    </InputWrapper>
    );
}

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 2rem;

    margin-top: 3.3rem;
`

const InputSection = styled.section`
    display: flex;
    flex-direction: column;
    width: 29.2rem;
    height: 5.6rem;
    
    border-bottom-color : ${({ theme }) => theme.colors.grey70};
`

const InputName = styled.h1` 
    display: flex;
    margin-bottom: 1rem;
        
    ${({ theme }) => theme.fonts.body04};
    color: ${({ theme }) => theme.colors.grey300};
`

const StudentInput = styled.input`
    display: flex;
    margin-bottom: 1rem;
    ${({ theme }) => theme.fonts.title03};
    color: ${({ theme }) => theme.colors.grey400};
`

const SubjectInput = styled.input`
    display: flex;
    margin-bottom: 1rem;
    ${({ theme }) => theme.fonts.title03};
    color: ${({ theme }) => theme.colors.grey400};
`