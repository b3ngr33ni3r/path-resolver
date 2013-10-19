fs = require("fs")
p = require("path")

module.exports = {
  guess: (path) ->
    if typeof path != "string"
      return false
    path = p.normalize(path)
    return p.resolve(process.cwd(),path) 
  sync: (path) ->
    if typeof path != "string"
      return false
    path = p.normalize(path)
    path = p.resolve(process.cwd(),path)
    if fs.existsSync path
      return path
    else
      return false
  async: (path,cb) ->
    if typeof path != "string"
      return false
    path = p.normalize(path)
    path = p.resolve(process.cwd(),path)
    fs.exists path,(exists)->
      if exists
        cb path
      else
        cb false
}