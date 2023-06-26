const defineSherkhanMessage = (object) => {
	try {
		Object.defineProperty(object, 'sherkhan_message', {
			value: 'Э котакбас э шешен сука амынды шыгарам мал',
			writable: false,
			enumerable: true,
			configurable: false,
		})
	}
	catch (err) {
		console.error(err)
	}
	return object
};

module.exports = {
	defineSherkhanMessage,
}
