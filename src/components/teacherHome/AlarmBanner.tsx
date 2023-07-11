interface AlarmBannerProps {
  isMissingAttendance: boolean;
  isMissingMaintenance: boolean;
}

export default function AlarmBanner(props: AlarmBannerProps) {
  const { isMissingAttendance, isMissingMaintenance } = props;

  return <>
  {isMissingAttendance&&}
  {isMissingMaintenance&&}
  </>;
}
