const template = require("./template.json");
const fs = require("fs");


const files = fs.readdirSync("img");

template.whiteboard.urls =
  files
  .filter(name => /\.png$/.test(name))
  .sort((a, b) => a < b ? 1 : -1)
  .map(name => `https://hystking.github.io/vvtv-presentation/img/${name}`);

console.log(JSON.stringify(template, null, 2));
