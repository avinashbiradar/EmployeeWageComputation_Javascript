const IS_FULL_TIME = 1;
const IS_PART_TIME = 2;
const EMP_RATE_PER_HOUR=20;
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
        let empHrs ;
        let empWage;
        let  empCheck = Math.floor(Math.random() * 10) % 3;
    if (empCheck==IS_FULL_TIME) {
        console.log("employee is full time present ");
         empHrs = 8;
         empWage = empHrs * EMP_RATE_PER_HOUR;
        console.log("employeeWage ",empWage);
    } else
    {
        console.log("employee is part time present  ");
         empHrs = 4;
         empWage = empHrs * EMP_RATE_PER_HOUR;
        console.log("employeeWage ",empWage);
        }
     }

    }

module.exports = new EmployeeWageProgram();