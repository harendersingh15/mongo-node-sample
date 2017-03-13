const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    name: { type: String, required: true},
    age : Number,
    mobile : String,
    dateCreated: { type: Date, default: Date.now, required: true }
})

const Employee = mongoose.model('Employee', employeeSchema);

export { Employee }