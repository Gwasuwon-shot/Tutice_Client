import React from "react";

export interface modalType {
  selectedDate: Date | null;
  setOpenModal: (open: boolean) => void;
}
