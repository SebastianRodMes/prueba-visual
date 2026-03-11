/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    magenta: '#E01E85',
                    teal: '#0097A7',
                    yellow: '#FFEB3B',
                    dark: '#212121',
                }
            },
            fontFamily: {
                caveat: ['"Caveat"', 'cursive', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
