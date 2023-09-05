import { QueryClient, QueryClientProvider } from "react-query";

import { CookiesProvider } from "react-cookie";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <CookiesProvider>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </CookiesProvider>,
);
