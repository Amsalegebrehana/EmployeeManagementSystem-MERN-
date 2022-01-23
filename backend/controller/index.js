
const Employee = require('../models/model');

const getEmployee = (req, res) =>{
    Employee
        .find()
        .then((employees) =>{
            res.status(200).json(employees);
        })
        .catch((err)=>{
            res.json({
                message:err.message
            })
        })

}
const getEmployeeById = (req,res)=>{
    Employee
        .findById(req.params.id)
        .then((employee)=>{
            res.status(200).json(employee);
        })
        .catch((err)=>{
            res.json({
                message:err.message
            })
        })
}
const addEmployee = (req, res) => {
    new Employee (
        {
            name : req.body.name,
            dateOfBirth : req.body.dateOfBirth,
            gender: req.body.gender,
            salary:req.body.salary
        }
    )
    .save()
    .then((employee)=>{
        res.status(201).json(employee)
    })
    .catch((err)=>{
        res.json({
            message:err.message
        })
    })
        
}
const updateEmployee = (req, res) => {
    Employee
        .findByIdAndUpdate(
            {_id:req.params.id},
            req.body,
            {new:true}
        )
        .then((employee)=>{
            if(!employee){
                res.json({
                    message:"Not correct format"
                })
            }
            else{
                res.status(201).json(employee)
            }
        })


}

const deleteEmploye=(req, res)=>{
    Employee 
        .findByIdAndDelete(req.params.id)
        .then((employee)=>{
            res.status(200).json({
                body:employee,
                message:`Id ${req.params.id} deleted successfully`
            })
        })
        .catch((err)=>{
            res.json({
                message: err.message
            })
        })
}
module.exports = {getEmployee,getEmployeeById,addEmployee, updateEmployee,deleteEmploye};