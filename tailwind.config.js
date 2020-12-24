module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class',
  corePlugins: {
    textColor: true,
  },
  theme: {
    extend: {
      width: {
        mc: "1024px",
      },
      colors: {
        linkedin: {
          100: "#0e76a8",
          "000": "#1293d2",
        },
        github: { "000": "#24292e", 100: "#f6f8fa" },
        mail: { "000": "#BB001B", 100: "#CF4D5F" },
      },
    },
  },
  variants: {
    width: ["responsive", "hover", "focus"],
    height: ["responsive", "hover", "focus"],
    transitionDuration: ["hover", "focus"],
    textColor: ["responsive", "hover", "focus"],
  },
  plugins: [],
};
