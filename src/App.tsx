import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Navigate } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import Router from "./Router";
import "./core/notification/settingFCM";
import Error from "./pages/Error";
import Loading from "./pages/Loading";
import { GlobalStyle } from "./style/globalStyle";
import { theme } from "./style/theme";

export default function App() {
  return (
    <ErrorBoundary FallbackComponent={OurFallbackComponent}>
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

function OurFallbackComponent({ error, resetErrorBoundary }: any) {
  if (error.code === 401) {
    return <Navigate to="/login" />;
  } else {
    return <Error resetErrorBoundary={resetErrorBoundary} />;
  }
}
