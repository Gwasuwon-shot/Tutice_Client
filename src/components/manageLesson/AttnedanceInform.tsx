interface AttendanceInformProps {
  date: string;
  status: string;
  startTime: string;
  endTime: string;
}

export default function AttnedanceInform(props: AttendanceInformProps) {
  const { date, status, startTime, endTime } = props;

  return (
    <article>
      <p>
        {date.split("-")[1]}.{date.split("-")[2]}
      </p>
      <div>
        <h1>회차 수업</h1>
        <p>
          {startTime} ~ {endTime}
        </p>
      </div>
      <p>{status}</p>
    </article>
  );
}
