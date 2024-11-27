import { useTonConnectUI, useTonWallet } from "@tonconnect/ui-react";
import Navbar from "@/components/common/Navbar";
import { createSwap } from "@mytonswap/widget";
import { useEffect, useRef } from "react";
import { TON_CONNECT_APP_ID, TON_CONNECT_UI_PREFERENCES } from "../constants";
import { useQueryState } from "nuqs";
import Footer from "@/components/common/Footer";
import { walletConnect } from "@/services/analytics/wallet-connect";
import { v4 } from "uuid";
import { View } from "@/services/analytics/view";
import { sendTransaction } from "@/services/analytics/sendTransaction";
import { toNano } from "@mytonswap/sdk";
const Swap = () => {
    const [tc] = useTonConnectUI();
    const initMount = useRef(false);
    const [lang] = useQueryState("lang");
    const [payt, setPayt] = useQueryState("payt");
    const [recvt, setRecvt] = useQueryState("recvt");
    const [amount] = useQueryState("amount");

    const wallet = useTonWallet();
    useEffect(() => {
        if (wallet) {
            walletConnect(
                wallet.account.address,
                wallet.device.appVersion,
                wallet.device.appName
            );
        }
    }, [wallet]);

    useEffect(() => {
        const stats_id = localStorage.getItem("stats_id");
        if (!stats_id) {
            const new_stats_id = v4();
            localStorage.setItem("stats_id", new_stats_id);
        }
        View();
    }, []);

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
                    default_pay_token: payt || "TON",
                    default_receive_token: recvt || undefined,
                    default_pay_amount:
                        toNano(amount ?? 0).toString() || undefined,
                },
                onSwap({ type, data }) {
                    sendTransaction(
                        data.pay.address,
                        data.receive.address,
                        data.pay.symbol,
                        data.receive.symbol,
                        +data.receive_amount,
                        wallet!.account.address,
                        data.hash,
                        type,
                        data.receive_rate
                    );
                },
                onTokenSelect({ asset, type }) {
                    if (type === "pay") {
                        setPayt(asset.symbol);
                    } else {
                        setRecvt(asset.symbol);
                    }
                },
                locale: lang || "en",
            });
        }
    }, [lang, tc]);
    return (
        <div
            className="bg-white dark:bg-zinc-950 min-h-screen w-full overflow-hidden relative"
            data-testid="app-bg"
        >
            <Navbar />
            <div className="dark:bg-green-600 w-64 h-64 absolute right-[-100px] blur-[200px] opacity-60  top-[200px]"></div>

            <div className="dark:bg-green-600 w-64 h-64 absolute left-[-100px] blur-[200px] opacity-60  top-[400px]"></div>
            <div className="items-center w-fit mx-auto mt-5 min-h-[calc(100dvh-81px)] ">
                <div className="md:mt-12" id="swap-widget"></div>
            </div>
            <Footer />
        </div>
    );
};

export default Swap;
