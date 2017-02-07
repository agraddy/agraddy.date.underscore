var mod = function(input) {
	if(!input) {
		input = new Date();
	}
	return input.toISOString().substring(0, 19).replace('T', '_').replace(/-/g, '_').replace(/:/g, '_');
}

module.exports = mod;
