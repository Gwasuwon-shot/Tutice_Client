import axios from 'axios';

interface createLessonMaintenanceProps {
    "lessonIdx" : number,
	"isLessonMaintenance": boolean,
}

export async function createLessonMaintenance(props: createLessonMaintenanceProps) {
    const {lessonIdx, isLessonMaintenance} = props;

    const data = await axios.post(`${import.meta.env.VITE_APP_BASE_URL}/api/lesson/maintenance`, {
        "lessonIdx" : lessonIdx,
        "isLessonMaintenance": isLessonMaintenance,
    },  
    {
        headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_APP_TEACHER_TOCKEN}`,
    }}
    );
}