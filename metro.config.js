const {getDefaultConfig} = require('metro-config');
module.exports = (async () => {
  const {
    resolver: {sourceExts, assetExts},
  } = await getDefaultConfig();

  return {
    resolver: {
      assetExts: [
        ...assetExts.filter(ext => ext !== 'svg'),
        'obj',
        'mtl',
        'JPG',
        'vrx',
        'hdr',
        'gltf',
        'glb',
        'bin',
        'arobject',
        'gif',
        'fbx',
      ],
      sourceExts: [...sourceExts, 'svg'],
    },
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        },
      }),
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
  };
})();
