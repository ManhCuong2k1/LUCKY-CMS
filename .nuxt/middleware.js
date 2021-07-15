const middleware = {}

middleware['admin'] = require('../src/middleware/admin.js')
middleware['admin'] = middleware['admin'].default || middleware['admin']

middleware['clearValidationErrors'] = require('../src/middleware/clearValidationErrors.js')
middleware['clearValidationErrors'] = middleware['clearValidationErrors'].default || middleware['clearValidationErrors']

middleware['guest'] = require('../src/middleware/guest.js')
middleware['guest'] = middleware['guest'].default || middleware['guest']

export default middleware
