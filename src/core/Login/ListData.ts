export interface checkListProps {
  id: number;
  selected: boolean;
}

export const checkList: checkListProps[] = [
  { id: 0, selected: false },
  { id: 1, selected: false },
  { id: 2, selected: false },
  { id: 3, selected: false },
  { id: 4, selected: false },
];

export interface textListProps {
  id: number;
  optional: string;
  boldText: string;
  linkText: string;
  lightText: string;
}

export const textList: textListProps[] = [
  { id: 0, optional: "", boldText: "약관 전체 동의", linkText: "", lightText: "선택항목에 대한 동의 포함" },
  { id: 1, optional: "(필수)", boldText: "만 14세 이상입니다.", linkText: "", lightText: "" },
  { id: 2, optional: "(필수)", boldText: "동의", linkText: "서비스 이용 약관", lightText: "" },
  { id: 3, optional: "(필수)", boldText: "동의", linkText: "개인정보 수집 및 이용", lightText: "" },
  { id: 4, optional: "(선택)", boldText: "동의", linkText: "개인정보 마케팅 활용", lightText: "" },
];
