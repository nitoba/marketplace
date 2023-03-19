module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      require.resolve('expo-router/babel'),
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          root: '.',
          alias: {
            '@navigation': './src/navigation',
            '@components': './src/components',
            '@screens': './src/screens',
            '@interfaces': './src/interfaces',
            '@services': './src/services',
            '@constants': './src/constants',
            '@assets': './src/assets',
            '@hooks': './src/hooks',
            '@stores': './src/stores',
            '@api': './src/api',
            '@atoms': './src/atoms',
            '@utils': './src/utils',
            '@theme': './src/theme',
          },
        },
      ],
    ],
  }
}
