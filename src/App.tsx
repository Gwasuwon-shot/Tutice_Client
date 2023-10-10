import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useQueryErrorResetBoundary } from "react-query";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import Router from "./Router";
import "./core/notification/settingFCM";
import Error from "./pages/Error";
import Loading from "./pages/Loading";
import { GlobalStyle } from "./style/globalStyle";
import { theme } from "./style/theme";

export default function App() {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary fallback={<Error />} onReset={reset}>
      <Suspense fallback={<Loading />}>
        <RecoilRoot>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Router />
          </ThemeProvider>
        </RecoilRoot>
      </Suspense>
    </ErrorBoundary>
  );
}
