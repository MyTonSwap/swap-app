import getQueryParam from "@/utils/common/getQueryParam";
import { httpClient } from "../http-client";

export const View = () => {
    const data = {
        chat_id: getQueryParam("chat_id"),
        section: "SWAP",
        distinct_id: localStorage.getItem("stats_id"),
        front_version: import.meta.env.PACKAGE_VERSION,
        before_url: document.referrer || "no-referrer",
        user_language: getQueryParam("lang") || "en",
        airdrop: getQueryParam("airdrop") === "true" ? true : false,
    };

    const config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "/stats/view",
        data,
        headers: {
            "Content-Type": "application/json",
        },
    };

    httpClient(config);
};
