import getQueryParam from "@/utils/common/getQueryParam";
import { httpClient } from "../http-client";

export const sendTransaction = (
    from: string,
    to: string,
    from_symbol: string,
    to_symbol: string,
    amount: number,
    wallet: string,
    hash: string,

    status: string,
    price: number
) => {
    const data = {
        from,
        to,
        from_symbol,
        to_symbol,
        amount,
        wallet,
        hash,
        priceImpact: "",
        fee: "",
        status,
        price,
        distinct_id: localStorage.getItem("stats_id"),
        chat_id: getQueryParam("chat_id"),
        airdrop: getQueryParam("airdrop") === "true" ? true : false,
    };

    const config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "/stats/transaction",
        data,
        headers: {
            "Content-Type": "application/json",
        },
    };

    httpClient(config);
};
