module.exports = {
    purge: [
        "./src/**/*.html",
        "./src/**/*.vue",
        "./src/**/*.jsx",
    ],
    theme: {
        extend: {
          colors: require('daisyui/colors'),
        },
      },
    variants: {},
    plugins: [
        require('daisyui'),
      ],
};
