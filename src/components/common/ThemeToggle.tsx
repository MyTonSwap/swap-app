import Moon from "@/assets/icons/moon";
import Sun from "@/assets/icons/sun";
import { useTheme } from "@/stores/theme";
import { cn } from "@/styles/utils";

const ThemeToggle = () => {
    const { theme, changeTheme } = useTheme();
    return (
        <div
            data-testid="theme-toggle"
            onClick={() => {
                changeTheme(theme === "dark" ? "light" : "dark");
            }}
            className={cn(
                "relative flex cursor-pointer gap-4 rounded-full bg-zinc-100 py-2 px-2 transition-all duration-300",
                theme === "dark" && "bg-zinc-900"
            )}
            style={{
                direction: "ltr",
            }}
        >
            <div
                className={cn(
                    "absolute top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-zinc-600 scale-125 dark:bg-zinc-700 transition-all",
                    theme === "dark" ? "left-2" : "left-12"
                )}
            ></div>
            <Moon
                isDark={theme === "dark"}
                className="relative z-10 scale-75"
            />

            <Sun isDark={theme === "dark"} className="relative z-10 scale-75" />
        </div>
    );
};

export default ThemeToggle;
