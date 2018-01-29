class myPlugin {
	constructor (options) {
		this.options = options
	}

	apply (compiler) {
	    compiler.plugin('compilation', this.injectScriptToBundle.bind(this))
	    compiler.plugin('done', this.onBuildCompleted.bind(this))
	}

	injectScriptToBundle(compilation) {
		compilation.mainTemplate('startup', source => {
			return "\nconsole.log('Hello world!');\n" + source
		})
	}

	onBuildCompleted(stats) {
		const detail = stats.toJson({
			errorDetails: false
		})

		this.sendWarnings(statsJson.warnings)
		this.sendErrors(statsJson.errors)
	}
}

module.exports = myPlugin
