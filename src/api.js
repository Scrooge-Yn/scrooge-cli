const axios = require('axios');

// 全局响应拦截器
axios.interceptors.response.use(res => {
	return res.data;
});

/**
 * 获取模板
 * @returns Promise 仓库信息
 */
async function getRepoInfo(access_token) {
	return axios.get(
		`https://gitee.com/api/v5/orgs/seehoo-frontend/repos?access_token=6c35136f8f41137c0373d016de769036`
	);
}

/**
 * 获取仓库下的版本
 * @param {string} repo 模板名称
 * @returns Promise 版本信息
 */
async function getTagsByRepo(repo) {
	return axios.get(`https://api.github.com/repos/zhurong-cli/${repo}/tags`);
}

module.exports = {
	getRepoInfo,
	getTagsByRepo,
};
