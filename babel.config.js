// babel.config.js

module.exports = {
  presets: [
    // 配置规则
    '@babel/preset-env',
  ],
  // 配置插件
  plugins: ['@babel/plugin-transform-runtime', '@vue/babel-plugin-jsx', '@babel/plugin-syntax-dynamic-import'],
}
