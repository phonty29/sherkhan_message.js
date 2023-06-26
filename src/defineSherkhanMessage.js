require('dotenv').config()

const defineSherkhanMessage = (object) => {
	try {
		Object.defineProperty(object, 'sherkhan_message', {
			value: process.env.SHERKHAN_MESSAGE,
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
