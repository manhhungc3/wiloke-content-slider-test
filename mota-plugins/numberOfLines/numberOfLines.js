function log(arr) {
  return console.log(...arr.map(([text, color]) => `\x1b[${color}m${text}\x1b[0m`));
}

exports.numberOfLines = () => {
  return ({ input, prevInput, addComponent }) => {
    addComponent(`[class*="lines-"] {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}`);

    const classNames = input.match(/lines-\d*/g);
    if (classNames) {
      classNames.forEach(className => {
        const lineClamp = Number(className.replace(/lines-/g, ''));
        addComponent(`.${className} { -webkit-line-clamp: ${lineClamp} }`);
        if (prevInput && !prevInput.includes(className)) {
          log([
            [`[Compiled successfully]`, 32],
            [`(class: ${className})`, 35],
          ]);
        }
      });
    }
  };
};
