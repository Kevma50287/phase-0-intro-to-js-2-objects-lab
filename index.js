// Write your solution in this file!

const employee = {
    name: "Kevin Ma",
    streetAddress: "11223 Brooklyn"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    let updated = {...employee}
    updated[key] = value
    return updated
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey (employee, key) {
    let updated = {...employee}
    delete updated[key]
    return updated
}

function destructivelyDeleteFromEmployeeByKey (employee, key) {
    delete employee[key]
    return employee
}