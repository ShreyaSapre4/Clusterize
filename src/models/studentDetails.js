const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const studentSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

studentSchema.pre("save", async function(next){
    // const hash = await bcrypt.hash(password, 10);
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password, 10)
        next()
    }
})

//create a collection

const StudentDetail = new mongoose.model("studentDetail", studentSchema)

module.exports = StudentDetail