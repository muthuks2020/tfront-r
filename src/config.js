const env = process.env.NODE_ENV

const cf = require('./config/' + env)

export default cf.default
