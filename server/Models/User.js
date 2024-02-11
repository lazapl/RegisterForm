const mongoose = require("mongoose")

const EmployeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
})
const sourceSchema = mongoose.model("test", EmployeeSchema)

module.exports = sourceSchema
