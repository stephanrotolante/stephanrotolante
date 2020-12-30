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
        cus: "48%",
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
    transitionProperty: {
      expand: ["height", "width"],
      //position: ['top', 'right', 'left', 'bottom'],
    },
    boxShadow: {
      hv: "0px 0px 10px 5px rgba(0,0,0,0.75)",
      rst: "0px 0px 9px -3px rgba(0,0,0,0.75)",
    },
    // scale: {
    //   101: "1.25",
    // },
  },
  variants: {
    scale: ["responsive", "hover", "focus", "active", "group-hover"],
    transitionDelay: ["responsive", "hover", "focus"],
    transitionProperty: ["responsive", "motion-safe", "motion-reduce"],
    transitionDuration: ["responsive", "hover", "focus"],
    boxShadow: ["responsive", "hover"],
    width: ["responsive", "hover", "focus"],
    height: ["responsive", "hover", "focus"],
    textColor: ["responsive", "hover", "focus"],
  },
  plugins: [],
};
