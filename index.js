const employee = {name: 'Sam', streetAddress: "1413W 228th st"}
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newAddress = {...employee}
    newAddress['streetAddress'] = '11 Broadway'
    return newAddress
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee.streetAddress = '12 Broadway'
    return employee
}
function deleteFromEmployeeByKey(employee, key){
    let newEmployee = { ...employee }
    delete newEmployee.name
    return newEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    const newEmployee = (employee)
    delete employee.name
    return newEmployee
}