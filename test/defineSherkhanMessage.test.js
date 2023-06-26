const { defineSherkhanMessage } = require('../src/defineSherkhanMessage')
require('dotenv').config()

describe('defineSherkhanMessage', () => {
	it('adds property to object', () => {
		const obj = {}
		defineSherkhanMessage(obj)
		expect(obj.sherkhan_message).toBeDefined()
	})

	it('message content is proper', () => {
		const obj = {}
		defineSherkhanMessage(obj)
		expect(obj.sherkhan_message).toBe(process.env.SHERKHAN_MESSAGE)
	})
})
