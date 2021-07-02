const mongoose = require('mongoose')
const schema = mongoose.Schema

const user = new schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number }
})

// const User = mongoose.model("user", user)
// module.exports = User
module.exports = User = mongoose.model("user", user)