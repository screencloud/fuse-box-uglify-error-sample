const { UglifyESPlugin, FuseBox, JSONPlugin } = require('fuse-box')
const { task, context } = require('fuse-box/sparky')

context(
  class {
    getConfig(bundle = false) {
      return FuseBox.init({
        homeDir: 'src',
        output: 'build/$name.js',
        target: 'server@esnext',
        sourceMaps: true,
        plugins: [
            JSONPlugin(),
            UglifyESPlugin({ // see https://github.com/mishoo/UglifyJS2/tree/harmony
              keep_fnames: true, // required for graphql's version check.
            }),
          ]
      })
    }
  }
);

task('default', async context => {
  const fuse = context.getConfig(true)
  fuse
    .bundle('app')
    .instructions(' > index.ts')

  await fuse.run()
});
