module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  "plugins": [
    ["import", { libraryName: "@ant-design/react-native" }],
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@wis_component/http': './wis_component/http/index',
          '@wis_component/form': './wis_component/form/index',
        },
      },
    ],
  ]
};
