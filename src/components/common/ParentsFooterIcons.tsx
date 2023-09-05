import { PARENTS_FOOTER_CATEGORY } from "../../core/parentsHome/parentsFooter";
import {
  CalendarSelectedParentsHomeIc,
  CalendarUnselectedParentsHomeIc,
  HomeSelectedParentsHomeIc,
  HomeUnselectedParentsHomeIc,
  MyPageSelectedParentsHomeIc,
  MyPageUnselectedParentsHomeIc,
} from "../../assets";
import { styled } from "styled-components";

interface ParentsFooterIconsProps {
  category: string;
  isMoved: boolean;
}

export default function ParentsFooterIcons(props: ParentsFooterIconsProps) {
  const { category, isMoved } = props;

  switch (category) {
    case PARENTS_FOOTER_CATEGORY.home:
      return isMoved ? <HomeSelectedParentsHomeIcon /> : <HomeUnselectedParentsHomeIcon />;
    case PARENTS_FOOTER_CATEGORY.calendar:
      return isMoved ? <CalendarSelectedParentsHomeIcon /> : <CalendarUnselectedParentsHomeIcon />;
    case PARENTS_FOOTER_CATEGORY.my:
      return <MypageUnselectedParentsHomeIcon />;
    default:
      return;
  }
}

const HomeSelectedParentsHomeIcon = styled(HomeSelectedParentsHomeIc)`
  width: 1.8rem;
  height: 1.8rem;
`;

const HomeUnselectedParentsHomeIcon = styled(HomeUnselectedParentsHomeIc)`
  width: 1.8rem;
  height: 1.8rem;
`;

const CalendarSelectedParentsHomeIcon = styled(CalendarSelectedParentsHomeIc)`
  width: 1.8rem;
  height: 1.8rem;
`;

const CalendarUnselectedParentsHomeIcon = styled(CalendarUnselectedParentsHomeIc)`
  width: 1.8rem;
  height: 1.8rem;
`;

const MypageUnselectedParentsHomeIcon = styled(MyPageUnselectedParentsHomeIc)`
  width: 1.8rem;
  height: 1.8rem;
`;

const MypageSelectedParentsHomeIcon = styled(MyPageSelectedParentsHomeIc)`
  width: 1.8rem;
  height: 1.8rem;
`;
