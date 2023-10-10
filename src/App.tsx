import { Suspense } from "react";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import Router from "./Router";
import "./core/notification/settingFCM";
import Loading from "./pages/Loading";
import { GlobalStyle } from "./style/globalStyle";
import { theme } from "./style/theme";

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Router />
        </ThemeProvider>
      </RecoilRoot>
    </Suspense>
  );
}
