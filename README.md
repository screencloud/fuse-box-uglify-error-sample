# fuse-box-uglify-error-sample

this repo showcases an error happening when using `uglify-es` on functions which return a `string` beginning with an `\` followed by a newline.

after `npm i`, run `npm start`. 

the error was discovered while trying to bundle `postgraphile` with target `server@esnext`. The settings in this repository are the same. 

Removing the leading `\` in `lib.js:2` will monkeypatch the issue. 
