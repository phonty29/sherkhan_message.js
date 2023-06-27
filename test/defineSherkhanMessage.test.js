const defineSherkhanMessage = require('../src/defineSherkhanMessage').default

describe('defineSherkhanMessage', () => {
	it('adds property to object', () => {
		const obj = {}
		defineSherkhanMessage(obj)
		expect(obj.sherkhan_message).toBeDefined()
	})

	it('message content is proper', () => {
		const obj = {}
		defineSherkhanMessage(obj)
		expect(obj.sherkhan_message).toBe('Э котакбас э блять сука амынды шыгарам мал')
	})
})
