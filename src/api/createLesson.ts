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

export async function createLesson(props: createLessonProps) {

    const {lesson, account} = props;
    const {studentName, subject, payment, amount, count, startDate, regularScheduleList} = lesson;
    const {name, bank, number} = account;

    const data = await axios.post(`${import.meta.env.VITE_APP_BASE_URL}/api/lesson`, {
        "lesson" : {
            "studentName" : studentName, 
            "subject": subject,
            "payment": payment,
            "amount": amount,
            "count": count,
            "startDate": startDate,
            "regularScheduleList": regularScheduleList,
        },
        "account" : {
            "name": name,
            "bank": bank,
            "number": number,
        }
    });
}