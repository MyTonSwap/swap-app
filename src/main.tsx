import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/routes";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { TON_CONNECT_MANIFEST } from "./constants";
import { NuqsAdapter } from "nuqs/adapters/react-router";
import "./i18n/i18n";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <TonConnectUIProvider manifestUrl={TON_CONNECT_MANIFEST}>
            <NuqsAdapter>
                <RouterProvider router={router} />
            </NuqsAdapter>
        </TonConnectUIProvider>
    </StrictMode>
);
