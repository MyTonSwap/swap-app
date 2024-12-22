import { create } from "zustand";
import WebApp from "@twa-dev/sdk";
type ITheme = {
    theme: "light" | "dark";
    changeTheme: (theme: "light" | "dark") => void;
};

export const useTheme = create<ITheme>()((set) => ({
    theme: (() => {
        const isTelegramMiniApp = WebApp.platform !== "unknown";
        const theme = isTelegramMiniApp
            ? WebApp.colorScheme
            : (localStorage.getItem("theme") as "dark" | "light") || "dark";
        document.documentElement.classList.add(theme);
        return theme;
    })(),
    changeTheme: (theme) => {
        document.documentElement.classList.remove("dark", "light");
        document.documentElement.classList.add(theme);
        localStorage.setItem("theme", theme);
        set(() => ({ theme }));
    },
}));
