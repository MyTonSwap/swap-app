import { useTonConnectUI } from "@tonconnect/ui-react";
import Navbar from "../components/common/Navbar";
import { createSwap } from "@mytonswap/widget";
import { useEffect, useRef } from "react";
import { TON_CONNECT_APP_ID, TON_CONNECT_UI_PREFERENCES } from "../constants";
import { useQueryState } from "nuqs";
const Swap = () => {
    const [tc] = useTonConnectUI();
    const initMount = useRef(false);
    const [lang] = useQueryState("lang");

    useEffect(() => {
        if (tc) {
            if (initMount.current) {
                return;
            }
            initMount.current = true;
            createSwap("swap-widget", {
                tonConnectInstance: tc,
                options: {
                    app_id: TON_CONNECT_APP_ID,
                    ui_preferences: TON_CONNECT_UI_PREFERENCES,
                },
                locale: lang || "en",
            });
        }
    }, [lang, tc]);
    return (
        <div
            className="bg-white dark:bg-background-500 min-h-screen w-full"
            data-testid="app-bg"
        >
            <Navbar />
            <div className="items-center w-fit mx-auto mt-5">
                <div id="swap-widget"></div>
            </div>
        </div>
    );
};

export default Swap;
