import React from 'react';
import {RegularLessonNotebookIc} from '../../assets';
import { STUDENT_COLOR } from "../../core/common/studentColor";
import styled from 'styled-components';

export default function LessonInformation() {


    
    return (
        <LessonInformationWrapper>
            <RegularLessonNotebookIcon />
        </LessonInformationWrapper>
    );
}

const LessonInformationWrapper = styled.section`

`

const RegularLessonNotebookIcon = styled(RegularLessonNotebookIc)`
    
`