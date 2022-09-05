const chalk = require('chalk');
const ora = require('ora');

/**
 * loading加载效果
 * @param {String} message 加载信息
 * @param {Function} fn 加载函数
 * @param {List} args fn 函数执行的参数
 * @returns 异步调用返回值
 */
async function loading(message, fn, ...args) {
	const spinner = ora(message);
	spinner.start();
	try {
		let executeRes = await fn(...args);
		spinner.succeed();
		return executeRes;
	} catch (error) {
		spinner.fail(chalk.red('获取失败, 重连中...'));
		await sleep(2000);
		return loading(message, fn, ...args);
	}
}

/**
 * 重新拉去限制
 * @param {Number} n 睡眠时间
 */
function sleep(time) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve();
		}, time);
	});
}

module.exports = {
	loading,
};
