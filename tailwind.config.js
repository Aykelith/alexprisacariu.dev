module.exports = {
    mode: 'jit',
    purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                accent: ['Lato', 'sans-serif'],
                normal: ['Roboto', 'sans-serif'],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
