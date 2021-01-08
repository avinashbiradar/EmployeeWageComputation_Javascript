class EmployeeWageProgram{
    EmployeeWageBuilderIf=()=>{
      let Present = 1;
        let  empCheck = Math.floor(Math.random() * 10) % 3;
        if (empCheck==Present) {
        console.log("employee is present ");
    } else {
        console.log("employee is absent ");
    }
  }
}
module.exports = new EmployeeWageProgram();