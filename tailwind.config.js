module.exports = {
    darkMode: 'class',  // Enables dark mode with a class (you can use media for system-wide dark mode)
    content: [
      './index.html',
      './src/**/*.{vue,js,ts,jsx,tsx}',  // Adjust based on your project structure
    ],
    theme: {
      extend: {
        colors: {
          'custom-dark-bg': '#1a1a1a',  // Example of a custom color for dark mode
          'custom-light-bg': '#f5f5f5',  // Example of a custom color for light mode
        },
      },
    },
    plugins: [
      // Tailwind plugins if needed
    ],
  }
  