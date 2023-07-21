import { QueryClient, QueryClientProvider } from "react-query";

import App from "./App.tsx";
import React from "react";
import ReactDOM from "react-dom/client";
import { CookiesProvider } from "react-cookie";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <CookiesProvider>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
    ,
  </CookiesProvider>,
);
