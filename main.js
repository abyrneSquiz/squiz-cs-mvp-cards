module.exports = async function (input, info) {
  return `<div style="background: #eee; padding: 2em 4em; margin: 1em 2em; display: block; font-family: sans-serif; box-shadow: 1px 1px 7px rgba(0,0,0,0.5)">
    ${input.text}
  </div>`;
};
