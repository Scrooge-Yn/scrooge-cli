// 创建模块
const path = require('path');
const fs = require('fs-extra');
const Inquirer = require('inquirer');
const Creator = require('./creator');
const { loading } = require('./util');

module.exports = async (projectName, options) => {
	// 获取当前工作目录
	const cwd = process.cwd();
	// 获取项目目录
	const targetDirectory = path.join(cwd, projectName);
	// 判断是否存在重名目录
	if (fs.existsSync(targetDirectory)) {
		// 判断是否使用了 --force 指令
		if (options.force) {
			// 删除重名目录
			await fs.remove(targetDirectory);
		} else {
			let { isOverwrite } = await new Inquirer.prompt([
				{
					name: 'isOverwrite', // 与 promise 返回值对应
					type: 'list',
					message: '存在重名目录, 请选择操作...',
					choices: [
						{ name: 'Overwrite', value: true },
						{ name: 'Cancel', value: false },
					],
				},
			]);
			// 选择 Cancel
			if (!isOverwrite) {
				console.log('Cancel');
				return;
			} else {
				// 选择 Overwrite, 先删除重名目录
				console.log('Remove');
				await loading(
					`删除${projectName}中, 请稍等...`,
					fs.remove,
					targetDirectory
				);
			}
		}
	}

	const creator = new Creator(projectName, targetDirectory);
	creator.create();
};
