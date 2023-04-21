/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
        './src/app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#008ef1',
                    25: '#0a9aff',
                    50: 'rgba(0, 128, 255, 0.8)',
                    100: '#0096ff',
                    200: '#73b9ff',
                    400: '#16487a',
                    500: '#2c4776',
                    600: '#003366',
                    700: 'rgba(2, 28, 48, 0.2)',
                    800: '#00264d',
                    850: 'rgba(2, 28, 48, 0.4)',
                    900: '#001031',
                    1000: '#00020e',
                },
                gray: {
                    DEFAULT: '#4a4a4a',
                    100: '#d2d2d2',
                    200: '#ccc',
                },
                fire: {
                    DEFAULT: '#f5222d',
                },
                accent: '#1295f3',
                'light-blue': '#63bfff',
                'off-black': '#1f1f1f',
                midnight: '#010007',
            },
            fontSize: {
                xxs: '0.55rem',
                xs: '0.6rem',
                sm: '0.7rem',
                tiny: '0.8rem',
                base: '0.9rem',
                md: '1rem',
                lg: '1.125rem',
                xl: '1.25rem',
                '2xl': '1.5rem',
                '3xl': '1.875rem',
                '4xl': '2.25rem',
                '4.5xl': '3rem',
                '5xl': '3.75rem',
                '6xl': '4rem',
                '7xl': '5rem',
                ginormous: '17rem',
            },
            height: {
                preview: '4.6875rem',
                128: '32rem',
            },
            maxWidth: {
                main: '950px',
            },
            minHeight: {
                body: '40rem',
            },
            minWidth: {
                preview: '4.6875rem',
            },
            screens: {
                xs: '400px',
            },
        },
    },
    plugins: [],
}
