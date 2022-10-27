const { rtl, pfs, groupHover } = require("mota-css");
const config2 = require("./src/config.json");
const { config } = require("./server-config");
const { numberOfLines } = require("./mota-plugins/numberOfLines/numberOfLines");

module.exports = {
  input: ["./src/**/*.twig", "./src/**/*.js"],
  output: `${config.input}/${config.styles}/mota.scss`,
  plugins: [rtl(), pfs(), groupHover(), numberOfLines()],
  parentSelector: `.${config2.name}-wrapper`,
  breakpoints: {
    sm: "768px",
    md: "992px",
    lg: "1200px",
  },
  customValue: (value) => {
    if (/color-\w*/g.test(value)) {
      const val = Array.from(new Set(value.match(/color(-\w*)*(\.\d*|)/g)));
      return val.reduce((str, val) => {
        if (/\.\d*/g.test(val)) {
          const alpha = val.replace(/.*(?=\.\d*)/g, "");
          return str
            .replaceAll(
              val,
              `rgba(var(--rgb-${val.replace(/\.\d*$/g, "")}), ${alpha})`
            )
            .replace(/\)\.\d*/g, ")");
        }
        return str.replaceAll(val, `var(--${val})`);
      }, value);
    }
    if (/font-\w*/g.test(value)) {
      const val = value.match(/font(-\w*)*/g)?.[0];
      return value.replace(/font(-\w*)*/g, `var(--${val})`);
    }
    return value;
  },
};
