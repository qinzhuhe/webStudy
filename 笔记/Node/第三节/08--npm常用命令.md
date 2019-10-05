# `npm`

### `npm`

- node package manager



### `npm` 网站

> npmjs.com



### `npm`命令行工具

`npm` 的第二层含义就是一个命令行工具，安装了 `node` 就已经安装了 `npm`

`npm` 也有版本这个概念。

可以在命令行中输入：

```shell
npm --version
```

升级 `npm` (自己升级自己)：

```shell
npm install --global npm
```



### `npm` 常用命令

- `npm init`
  - `npm init -y` 可以跳过向导，快速生成
- `npm install`
  - 一次性把 `dependencies` 选项中的依赖项全部安装
  - `npm i`
- `npm install 包名`
  - 只下载
  - `npm i` 包名
- `npm install --save 包名`
  - 下载并且保存依赖项（`package.json` 文件中的 `dependencies` 选项）
  - `npm -S 包名`
- `npm uninstall 包名`
  - 只删除，如果有依赖项会依然保存
  - `npm un 包名`
- `npm uninstall --save 包名`
  - 删除的同时也会把依赖信息也去除
  - `npm un -S 包名`
- `npm help`
  - 查看使用帮助
- `npm 命令 --help`
  - 查看指定命令的使用帮助
  - 例如我忘记了 `uninstall` 命令的简写了，这个时候，可以输入 `npm uninstall --help` 来查看使用帮助

### 解决 `npm` 被墙问题

安装淘宝的 `cnpm`：

```shell
# 在任意目录执行都可以
# --gloabl 表示安装到全局，而非当前目录
# --global 不能省略，否则不管用
npm install --global cnpm
```

接下来在安装包是会自动将之前的 `npm` 替换成 `cnpm`

而如果不想安装 `cnpm` 又想使用淘宝的服务器来下载：

```shell
npm install jquery --registry=https://registry.npm.taobao.org
```

但是每一次手动这样加参数很麻烦，所以我们可以把这个选项加入配置文件中：

```shell
npm config set registry https://registry.npm.taobao.org

# 查看 npm 配置信息
npm config list
```

只要经过上面命令的配置，则以后所有的 `npm install` 都会默认通过淘宝的服务器来下载。