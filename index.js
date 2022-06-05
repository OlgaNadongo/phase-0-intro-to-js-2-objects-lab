// Write your solution in this file!
const employee={
    name: "Kia",
    streetAddress: "11 Nairobi",
};
function updateEmployeeWithKeyAndValue(){
     const copyOfEmployee= {
       
       name: "Sam",
       streetAddress: "11 Broadway",
 
     }
     return copyOfEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue() {
     employee.streetAddress="12 Broadway";
     const newEmployee= employee
    return employee
 }
 
function deleteFromEmployeeByKey(){
    const copyOfEmployee1={
        streetAddress:"11 Broadway"
    }
    return copyOfEmployee1
}
  
   

function destructivelyDeleteFromEmployeeByKey(){
     
    delete employee['name']
    return employee
}
  