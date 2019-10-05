# npm与package.json

### npm

- node package manager

### package.json

我们建议每一个项目都要有一个 `package.json` 文件（包描述文件，如同产品说明书）。

这个文件可以通过 `npm init` 的方式来自动初始化出来。

而对于目前来讲，最有用的是 `dependencies` 选项，可以帮助我们保存你第三方包的依赖信息。

如果不小心丢失了 `Node_modules` 也不用担心，我们只需要：`npm install` 就会自动把 `package.json` 中的 `dependencies` 中所有的依赖项都下载回来。

- 建议每个项目的根目录下都有一个 `package.json` 文件。
- 建议执行 `npm install 包名` 的时候都加上 `--save` 这个选项，目的是用来保存依赖项信息。

