import { useRecoilState } from "recoil";
import { parentsFooterCategory } from "../atom/common/parentsFooterCategory";
import { ParentsFooterType } from "../type/parentsHome/ParentsFooterType";
import { useNavigate } from "react-router-dom";
import { PARENTS_FOOTER_CATEGORY } from "../core/parentsHome/parentsFooter";

export default function useParentsFooter() {
  const [parentsFooterList, setParentsFooterList] = useRecoilState<ParentsFooterType[]>(parentsFooterCategory);
  const navigate = useNavigate();

  function handleMoveToPage(category: string) {
    setParentsFooterList(
      parentsFooterList.map((list) =>
        list.category === category ? { ...list, isMoved: true } : { ...list, isMoved: false },
      ),
    );
    switch (category) {
      case PARENTS_FOOTER_CATEGORY.home:
        navigate("/");
        break;
      case PARENTS_FOOTER_CATEGORY.calendar:
        navigate("/parent-calendar");
        break;
      default:
        break;
    }
  }

  function handleChangeActive(category: string) {
    setParentsFooterList(
      parentsFooterList.map((list) =>
        list.category === category ? { ...list, isMoved: true } : { ...list, isMoved: false },
      ),
    );
  }
  return { handleMoveToPage, handleChangeActive };
}
