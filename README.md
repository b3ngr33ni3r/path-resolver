path-resolver
=============

returns a valid filesystem path.


## What?

this is a really insanely simple module to do path normalization, and existence checking.
__How simple? *<30 lines of coffeescript*__.

## How?

`npm install path-resolver` and then `require('path-resolver').<method>` where method is `guess`,`sync`, or `async`.


## Examples

sync check (existential checking is done, in sync)
```
if ((path = require('path-resolver').sync("/path/to/file.ext")) != false)
  console.log("valid path given: "+path);
```

async check (existential checking is done, async [needs callback])
```
require('path-resolver').async("/path/to/file.ext",function(path){
  if (path != false)
    console.log("valid path given: "+path);
  else
    console.log("bad path!");
});
```

and guess check (no existential checks done)
```
if ((path = require('path-resolver').guess("/path/to/file.ext")) != false)
  console.log("probably valid path given (syntax is correct): "+path);
```


## A bit more info...

so a __sync__ check uses `fs.existsSync` whereas __async__ uses `fs.exists`. __guess__ does check at all, just syntax verifies the path.
if any of these methods return false, the path syntax was invalid, or (if using sync or async) the path doesn't exist in the filesystem.
