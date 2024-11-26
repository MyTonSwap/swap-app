import getQueryParam from "@/utils/common/getQueryParam";
import { AxiosError, AxiosRequestConfig } from "axios";
import { httpClient } from "../http-client";

type ErrorResponse = {
    statusCode: number;
    message: string;
};

export const walletConnect = async (
    wallet: string,
    version: string,
    name: string
) => {
    const data = {
        address: wallet,
        distinct_id: localStorage.getItem("stats_id"),
        name,
        version,
        chat_id: getQueryParam("chat_id"),
        airdrop: getQueryParam("airdrop") === "true" ? true : false,
    };

    const config: AxiosRequestConfig = {
        method: "post",
        maxBodyLength: Infinity,
        url: "/stats/wallet",
        data,
        headers: {
            "Content-Type": "application/json",
        },
    };

    try {
        const { data } = await httpClient(config);
        return { status: true, message: "Fetch successful", data };
    } catch (err) {
        if (err instanceof AxiosError) {
            return {
                status: false,
                message: (err.response?.data as ErrorResponse).message,
                errorCode: (err.response?.data as ErrorResponse).statusCode,
                data: null,
            };
        } else {
            return {
                status: false,
                message: "Unknown error happened!",
                data: null,
            };
        }
    }
};
