#! /usr/bin/env node
const chalk = require('chalk');
const program = require('commander');

program
	.command('create <project-name>') // 新增创建项目指令
	.description('create a new project') // 描述信息
	.option('-f, --force', '当存在重复目录时, 进行强制覆盖操作') // 强制覆盖指令
	.action((projectName, cmd) => {
		// 引入 create 模块, 并传入参数
		require('../src/create')(projectName, cmd);
	});

program
	.command('config [value]') // 新增 config 命令
	.description('inspect and modify the config')
	.option('-g, --get <key>', '获取value值')
	.option('-s, --set <key> <value>', '设置value值')
	.option('-d, --delete <key>', '删除key')
	.action((value, keys) => {
		console.log(value, keys);
	});

program.on('--help', function () {
	// 前后增加一行模拟空格, 方便阅读
	console.log();
	console.log(
		`Run ${chalk.cyan(
			'scrooge-cli <command> --help'
		)} for detailed usage of given command.`
	);
	console.log();
});

program
	.name('scrooge-cli')
	.usage(`<command> [option]`)
	.version(`scooge-cli ${require('../package.json').version}`);

program.parse(process.argv);
