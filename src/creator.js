const util = require('util');
const Inquirer = require('inquirer');
const chalk = require('chalk');
const downloadGitRepo = require('download-git-repo');
const { loading } = require('./util');
const { getRepoInfo, getTagsByRepo } = require('./api');

class Creator {
	constructor(name, target) {
		this.name = name;
		this.target = target;
		// 转化 Promise 方法
		this.downloadGitRepo = util.promisify(downloadGitRepo);
	}
	async create() {
		// gitee授权获取的access_token
		let { access_token } = await new Inquirer.prompt([
			{
				name: 'access_token',
				type: 'input',
				message: '请输入授权access_token',
			},
		]);
		// 模板信息
		let repo = await this.getRepoInfo(access_token);
		// 版本信息
		// let tag = await this.getTagInfo(repo);
		// 下载模板
		await this.download(repo);

		console.log();
		console.log(chalk.bgCyan.bold('Next Step!'));
		console.log();
		console.log('完成模板安装, 开始愉快的开发吧~');
	}
	// 获取模板信息, 返回用户选择的模板
	async getRepoInfo() {
		// 获取仓库list
		let repoList = await loading('获取仓库信息中...', getRepoInfo);
		// 获取仓库名
		const repos = repoList.map(item => {
			return item.name;
		});
		let { repo } = await new Inquirer.prompt([
			{
				name: 'repo',
				type: 'list',
				message: '请选择模板...',
				choices: repos,
			},
		]);
		return repo;
	}
	// 获取版本信息, 返回用户选择的版本
	async getTagInfo(repo) {
		// 获取版本list
		let tagList = await loading('获取版本信息中...', getTagsByRepo, repo);
		// 获取版本名
		const tags = tagList.map(item => {
			return item.name;
		});
		let { tag } = await new Inquirer.prompt([
			{
				name: 'tag',
				type: 'list',
				message: '请选择版本...',
				choices: tags,
			},
		]);
		return tag;
	}
	// 下载模板方法
	async download(repo, tag) {
		// 初始化下载地址
		const templateUrl = `seehoo-frontend/${repo}`;
		await loading(
			'下载模板中, 请稍等...',
			this.downloadGitRepo,
			`direct:https://gitee.com/${templateUrl}.git`,
			this.name,
			{ clone: true }
		);
	}
}

module.exports = Creator;
