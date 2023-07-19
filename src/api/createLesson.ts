import axios from 'axios';

interface scheduleListProps {
    dayOfWeek: string,
    startTime: string,
    endTime: string,
}

interface createLessonProps {
    lesson : {
        studentName: string,
        subject: string,
        payment: string,
        amount: number,
        count: string,
        startDate: string,
        regularScheduleList: scheduleListProps[],
    },
    account: {
        name: string,
        bank: string,
        number: string,
    }
}

export async function createLesson(props) {
    const data = await axios.post(`${import.meta.env.VITE_APP_BASE_URL}/api/lesson`, {
        headers : {
            "Content-Type": "application/json",
            Authorization : `Bearer ${import.meta.env.VITE_APP_TEACHER_TOCKEN}`,
        },
    });

    return data.data.data.
}