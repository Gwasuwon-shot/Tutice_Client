export interface PastLessonRecordType {
  idx: number;
  date: string;
  startTime: string;
  endTime: string;
}

export interface DepositInfoType {
  idx: number;
  date: string;
  amount: number;
  status: boolean;
}
