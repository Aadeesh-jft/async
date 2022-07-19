let emp = []
function addEmployee(employee,callback){
  console.log('adding Employee')
  setTimeout(() => {
    emp.push(employee);
    console.log('Employee Added')
    callback()
  }, 2000);
}

// function getEmployees(){
//   console.log('Fetching Employees')
//   setTimeout(() => {
//     console.log('Fetched')
//     return emp;
//   }, 1000);
// }

function getEmployees(callback){
  console.log('Fetching Employees')
  setTimeout(() => {
    console.log('Fetched')
    callback(emp)
  }, 1000);
}

function deleteFromTable(i, callback) {
  console.log("Deleting row.")
  setTimeout(() => {
    
    emp.splice(i, 1);
    /*
    let table = document.getElementById("table");
    table.deleteRow(i);
    */
  }, 2000);
  
  callback();
}