module.exports = {
  roots: [
    "./Code", // jest 扫描的目录
  ],
  transform: {
    "^.+\\.tsx?$": "ts-jest", // 哪些文件需要用 ts-jest 执行
  },
  testRegex: "(/__test__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
