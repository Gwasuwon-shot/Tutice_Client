import { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { isModalOpen } from "../atom/common/isModalOpen";
import { isClickedOutside } from "../utils/common/modal";

export default function useModal() {
  const modalRef = useRef<HTMLDivElement>(null);

  const [openModal, setOpenModal] = useRecoilState<boolean>(isModalOpen);

  useEffect(() => {
    document.addEventListener("mousedown", closeModal);
    return () => {
      document.removeEventListener("mousedown", closeModal);
    };
  }, [openModal]);

  function closeModal(e: MouseEvent) {
    if (isClickedOutside(e, modalRef, openModal)) {
      setOpenModal(false);
    }
  }

  return { modalRef, closeModal };
}
