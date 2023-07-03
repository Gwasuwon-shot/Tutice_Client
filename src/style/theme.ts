import { DefaultTheme } from "styled-components";

const colors = {
  // 메인컬러
  green1: "#DFF3EF",
  green2: "#B0E0D6",
  green3: "#7DCDBD",
  green4: "#45B9A2",
  green5: "#0DA98F",
  green6: "#00997D",
  green7: "#038F7E",
  green8: "#007C61",
  green9: "#006C52",
  green10: "#005037",

  // 서브컬러
  red1: "#FEE8E7",
  red2: "#FFCABA",
  red3: "#FFA78E",
  red4: "#FF8260",
  red5: "#FF623D",
  red6: "#FF3F18",
  red7: "#FF3914",
  red8: "#F9300D",
  red9: "#EB2706",
  red10: "#D30B00",

  //회색
  grey0: "#FFFFFF",
  grey20: "#F8F9FA",
  grey50: "#F1F3F5",
  grey70: "#E9ECEF",
  grey100: "#DEE2E6",
  grey150: "#CED4DA",
  grey200: "#C1C6CC",
  grey300: "#A9AEB2",
  grey400: "#899199",
  grey500: "#727980",
  grey600: "#5B6166",
  grey700: "#5A5F64",
  grey800: "#343A40",
  grey900: "#212529",

  //캘린더
  yellow: "#FFF5A8",
  lgreen: "#EAF0A4",
  mint: "#CCF5ED",
  red: "#FFCCCC",
  orange: "#FFDBBA",
  blue: "#CCDDFF",
  greyblue: "#CFDEE5",
  purple: "#E3D2FA",
  ygreen: "#D3F1C1",
  brown: "#EBDDD5",
  pink: "#FFD9F2",
};

export type ColorsTypes = typeof colors;

interface Font {
  weight: number;
  size: number;
  lineHeight: number;
}

function FONT({ weight, size, lineHeight }: Font): string {
  return `
    font-family: "Pretendard"
    font-weight : ${weight};
    font-size : ${size}rem;
    line-height : ${lineHeight}rem;
    `;
}

const fonts = {
  title1: FONT({ weight: 700, size: 2.0, lineHeight: 2.4 }),
  title2: FONT({ weight: 700, size: 1.6, lineHeight: 1.9 }),

  body1: FONT({ weight: 700, size: 1.4, lineHeight: 1.6 }),
  body2: FONT({ weight: 500, size: 1.4, lineHeight: 1.6 }),
  body3: FONT({ weight: 700, size: 1.2, lineHeight: 1.4 }),

  caption1: FONT({ weight: 500, size: 1.0, lineHeight: 1.2 }),
};

export type FontsTypes = typeof fonts;

export const theme: DefaultTheme = {
  colors,
  fonts,
};
