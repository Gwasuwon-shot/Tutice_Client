import React from "react";
import {styled} from 'styled-components';

interface ProgressBarProps {
    progress : number;
}

export default function ProgressBar({ progress }: ProgressBarProps) {    
    const getColor = (progress:number) : string => {
        if (progress === 25) return 'green';
        if (progress === 50) return 'green';
        if (progress === 75) return 'green';
        if (progress === 100) return 'green';
        return 'transparent';
    }

    const getWidth = (progress: number): string => {
        return `${progress}%`;
      };

    return (
        <ProgressBarWrapper>
            <Progress width = {getWidth(progress)} color = {getColor(progress)} />
        </ProgressBarWrapper>
    )
}

const ProgressBarWrapper = styled.section`
    width: 100%;
    height: 0.4rem;
    background-color: lightgray;
`

const Progress = styled.div<{width: string; color: string}>`
    height: 100%;
    width: ${(props) => props.width};
    background-color: ${(props)=>props.color};
`