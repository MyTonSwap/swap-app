import { create } from "zustand";

type ITheme = {
    theme: "light" | "dark";
    changeTheme: (theme: "light" | "dark") => void;
};

export const useTheme = create<ITheme>()((set) => ({
    theme: (() => {
        const theme =
            (localStorage.getItem("theme") as "dark" | "light") || "dark";
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
