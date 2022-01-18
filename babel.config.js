module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./src/'],
        extensions: ['.js', '.jsx', '.tsx', '.ios.js', '.android.js'],
      },
    ],
  ],
};
