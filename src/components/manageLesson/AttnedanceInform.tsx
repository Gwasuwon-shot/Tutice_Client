interface AttendanceInformProps {
  date: string;
  status: string;
  startTime: string;
  endTime: string;
}

export default function AttnedanceInform(props: AttendanceInformProps) {
  const { date, status, startTime, endTime } = props;

  return <div>AttnedanceInform</div>;
}
