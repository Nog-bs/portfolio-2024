/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            borderColor: {
                highlight: "#98B9AB",
            },
            colors: {
                highlight: "#98B9AB",
            },
            backgroundColor: {
                highlight: "#98B9AB",
                "dark-mode": "#373739",
            },
            fontFamily: {
                inter: ["Inter", "sans-serif"],
            },
        },
    },
    plugins: [],
};
