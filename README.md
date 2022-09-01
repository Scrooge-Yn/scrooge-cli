# scrooge-cli脚手架
+ version 1.0.0
+ 使用 ```create``` 创建包含Vue2、Vue3的集成脚手架
+ 使用 ```scrooge-cli``` 快速体验
+ 目前 React 集成支持中


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
项目使用了yarn和node，当然npm也可以，不过还是推荐yarn
```
// 使用yarn
yarn add scrooge-cli

// 使用npm
npm i scrooge-cli
```

# 第三方库
+ chalk: 命令行美化工具  ***版本必须低于```4.5.0```，推荐```4.0.0```***
+ ora: 命令行spinner效果
+ commander: 命令行工具  ***版本必须低于```9.0.0```，推荐```9.0.0```***
+ figlet: 命令行自定义动画
+ inquirer: 命令行选择器工具  ***版本必须低于```8.3.0```，推荐```8.2.1```***
+ download-git-repo: 命令行git仓库模板下载工具
