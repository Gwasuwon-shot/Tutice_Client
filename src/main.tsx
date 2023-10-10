import { QueryClient, QueryClientProvider } from "react-query";

import { CookiesProvider } from "react-cookie";
import ReactDOM from "react-dom/client";
import App from "./App";

export function queryErrorHandler(error: any) {
  console.log(error.messaging);
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      onError: queryErrorHandler,
      retry: 0,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <CookiesProvider>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </CookiesProvider>,
);
