var fs = require("fs");
var browserify = require("browserify");
browserify("./src/index.js")
  .transform("babelify", {presets: ["env"]})
  .bundle()
  .pipe(fs.createWriteStream("dest/js/index.js"));
