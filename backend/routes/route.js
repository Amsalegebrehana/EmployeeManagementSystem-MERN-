
const express = require('express');
const router =  express.Router();

const {
    getEmployee,
    getEmployeeById,
    addEmployee,
    updateEmployee,
    deleteEmploye
} = require('../controller/index');
router.get('/employee', getEmployee);
router.get('/employee/:id',getEmployeeById)

router.post('/employee',addEmployee);

router.put('/employee/:id',updateEmployee);
router.delete('/employee/:id', deleteEmploye);


module.exports=router;
