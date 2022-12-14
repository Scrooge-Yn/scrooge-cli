- [scrooge-cli](#scrooge-cli)
- [use](#use)
- [install](#install)
- [dependencies](#dependencies)

# scrooge-cli

- version 1.0.9
- 使用 `create` 创建 **_自定义模板_**
- 目前使用的模板来自https://gitee.com/seehoo-frontend, 包含基于vue2的主、子应用模板
- 使用 `scrooge-cli` 快速体验
- 目前 React 集成支持中

# use

```
// 指令查询
scrooge-cli --help

// 创建指令
scrooge-cli create <projectName>

--force 强制覆盖重名目录
--config 配置
```

# install

项目使用了 yarn 和 node，当然 npm 也可以，不过还是推荐 yarn

```
// 使用yarn
yarn add scrooge-cli

// 使用npm
npm i scrooge-cli
```

# dependencies

- chalk: 命令行美化工具 **_版本必须低于`4.5.0`，推荐`4.0.0`_**
- ora: 命令行 spinner 效果
- commander: 命令行工具 **_版本必须低于`9.0.0`，推荐`9.0.0`_**
- figlet: 命令行自定义动画
- inquirer: 命令行选择器工具 **_版本必须低于`8.3.0`，推荐`8.2.1`_**
- download-git-repo: 命令行 git 仓库模板下载工具
- qs: axios post请求
