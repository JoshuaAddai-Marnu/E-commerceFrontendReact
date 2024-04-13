const { exec } = require('child_process')

class RunGulpBeforeBuildPlugin {
	constructor(options) {
		this.options = options || {}
		this.watchMode = false
	}

	apply(compiler) {
		const runGulpTask = (compilation, callback) => {
			if (this.watchMode) {
				console.log('Running Gulp task before build in watch mode...')
				exec('gulp ' + this.options.taskName, (err, stdout, stderr) => {
					if (err) {
						console.error(err)
					} else {
						console.log(stdout)
					}
					callback()
				})
			} else {
				callback()
			}
		}

		compiler.hooks.watchRun.tap('RunGulpBeforeBuildPlugin', () => {
			this.watchMode = true
		})

		compiler.hooks.beforeCompile.tapAsync('RunGulpBeforeBuildPlugin', runGulpTask)
	}
}

module.exports = RunGulpBeforeBuildPlugin
