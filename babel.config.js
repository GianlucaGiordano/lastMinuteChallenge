module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.js', '.ts', '.tsx', '.json'],
        root: ['./app'],
        alias: {
          '@components': './app/components',
          '@screens': './app/screens',
          '@assets': './app/assets',
          '@styles': './app/styles',
          '@interfaces': './app/interfaces',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
