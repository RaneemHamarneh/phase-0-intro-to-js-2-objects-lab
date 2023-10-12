// Write your solution in this file!
const employee ={};
const newEmployee ={};

function updateEmployeeWithKeyAndValue(employee, key, value){
    return {...employee, [key] : value};
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key){
    const clonedEmployee = {...employee};

    delete clonedEmployee[key];

    return clonedEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];

    return employee;

}

employee.name = 'Sam';

employee.streetAddress = '11 Broadway';
employee.streetAddress = '12 Broadway';
newEmployee = deleteFromEmployeeByKey(employee ,'name');
destructivelyDeleteFromEmployeeByKey(employee, 'name');



