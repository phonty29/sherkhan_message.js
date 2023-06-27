const defineSherkhanMessage = (object) => {
	try {
		Object.defineProperty(object, 'sherkhan_message', {
			value: 'Э котакбас э блять сука амынды шыгарам мал',
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

export default defineSherkhanMessage
