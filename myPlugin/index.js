class myPlugin {
	constructor (options) {
		this.options = options
	}

	apply (compiler) {
		console.log(compiler)
	    compiler.plugin('compilation', this.watchCompilation.bind(this))
	}

	watchCompilation(compilation) {
		// console.log(compilation)
	}
}

module.exports = myPlugin
