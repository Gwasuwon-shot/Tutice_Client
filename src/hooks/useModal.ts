import { useEffect, useRef, useState } from "react";
import { isClickedOutside } from "../utils/common/modal";

export default function useModal() {
  const modalRef = useRef<HTMLDivElement>(null);

  const [openModal, setOpenModal] = useState<boolean>(false);

  useEffect(() => {
    document.addEventListener("mousedown", closeModal);
    return () => {
      document.removeEventListener("mousedown", closeModal);
    };
  });

  function closeModal(e: MouseEvent) {
    if (isClickedOutside(e, modalRef, openModal)) {
      setOpenModal(false);
    }
  }

  return { modalRef, closeModal };
}
