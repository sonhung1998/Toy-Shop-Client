const { override, fixBabelImports ,removeModuleScopePlugin} = require('customize-cra');
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }),removeModuleScopePlugin()
);