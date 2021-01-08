class EmployeeWageProgram{
    employeeCheck=()=>{
      let Present = 1;
        let  empCheck = Math.floor(Math.random() * 10) % 3;
        if (empCheck==Present) {
        console.log("employee is present ");
    } else {
        console.log("employee is absent ");
    }
  }
    employeeDailyWage=(employeeCheck)=>{
    const IS_FULL_TIME = 1;
    const EMP_RATE_PER_HOUR=20;
    let empHrs = 8;
    let empWage = empHrs * EMP_RATE_PER_HOUR;
    console.log("employeeWage ",empWage);
    }
}
module.exports = new EmployeeWageProgram();