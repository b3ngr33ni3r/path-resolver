// Generated by CoffeeScript 1.6.3
var fs, p;

fs = require("fs");

p = require("path");

module.exports = {
  guess: function(path) {
    if (typeof path !== "string") {
      return false;
    }
    path = p.normalize(path);
    return p.resolve(process.cwd(), path);
  },
  sync: function(path) {
    if (typeof path !== "string") {
      return false;
    }
    path = p.normalize(path);
    path = p.resolve(process.cwd(), path);
    if (fs.existsSync(path)) {
      return path;
    } else {
      return false;
    }
  },
  async: function(path, cb) {
    if (typeof path !== "string") {
      return false;
    }
    path = p.normalize(path);
    path = p.resolve(process.cwd(), path);
    return fs.exists(path, function(exists) {
      if (exists) {
        return cb(path);
      } else {
        return cb(false);
      }
    });
  }
};
