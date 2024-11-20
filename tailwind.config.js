/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                mts: {
                    100: "#d3f4de",
                    200: "#a7e9bd",
                    300: "#7bde9d",
                    400: "#4fd37c",
                    500: "#23c85b",
                    600: "#1ca049",
                    700: "#157837",
                    800: "#0e5024",
                    900: "#072812",
                },
                background: {
                    100: "#cfd1d4",
                    200: "#9fa3a9",
                    300: "#70747e",
                    400: "#404653",
                    500: "#101828",
                    600: "#0d1320",
                    700: "#0a0e18",
                    800: "#060a10",
                    900: "#030508",
                },
            },
            gridTemplateColumns: {
                footer: "350px 1fr 1fr 1fr",
            },
        },
    },
    plugins: [],
    darkMode: "class",
};
