import React from "react";

export interface modalType {
  selectedDate: Date;
  formattedMonth: string;
  setOpenModal: (open: boolean) => void;
}
