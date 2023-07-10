import styled from 'styled-components';

export default function LessonInput() {

    let studentName;
    let lessonName;
    
    return (
    <>
        <InputName> 학생이름 </InputName>
        <StudentInput type = 'text' placeholder = '이름을 입력하세요'/>

        <InputName> 과목 </InputName>
        <SubjectInput type = 'text' placeholder = '수업과목을 입력하세요' />
    </>
    );
}

const InputName = styled.h1`

`

const StudentInput = styled.input`

`

const SubjectInput = styled.input`

`