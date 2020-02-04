module.exports = {
  babelrc: false,
  cacheDirectory: true,
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['last 2 versions', 'not dead'],
        },
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [],
};
