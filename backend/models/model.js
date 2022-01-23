const mongoose = require('mongoose');

const schema = mongoose.Schema;

const employeeSchema = new schema(
    {
        name:{
            type:String,
            required:true
        },
        dateOfBirth:{
            type:Date,
            required: true
        },
        gender:{
            type:String,
            required: true
        },
        salary:{
            type: Number,
            required:false
        }

    },
    {collection:"employeeSchema"}
);

module.exports = mongoose.model("employee", employeeSchema);
