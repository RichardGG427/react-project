// const { override, fixBabelImports, addBabelPlugins } = require("customize-cra");
const path = require("path");
const {
  override,
  addDecoratorsLegacy,
  fixBabelImports,
} = require("customize-cra");

// module.exports = override(
//   //配置antd按需加载
// fixBabelImports("import", {
//   libraryName: "antd",
//   libraryDirectory: "es",
//   style: "css",
// }),
//   //配置支持高阶组件装饰器写法
//   addBabelPlugins(
//     // 支持装饰器
//     [
//       "@babel/plugin-proposal-decorators",
//       {
//         legacy: true,
//       },
//     ]
//   )
// );

function resolve(dir) {
  return path.join(__dirname, dir);
}

const customize = () => (config, env) => {
  config.resolve.alias["@"] = resolve("src");
  if (env === "production") {
    config.externals = {
      react: "React",
      "react-dom": "ReactDOM",
    };
  }

  return config;
};
module.exports = override(
  addDecoratorsLegacy(),
  customize(),
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: "css",
  })
);
