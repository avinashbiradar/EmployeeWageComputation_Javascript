const IS_FULL_TIME = 1;
const IS_PART_TIME = 2;
const EMP_RATE_PER_HOUR=20;
const EMP_WORKING_DAYS_FOR_MONTH=20;
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
        let empWageDay;
        let empWageMonth;
        let  empCheck = Math.floor(Math.random() * 10) % 3;
        switch(empCheck){
            case  IS_FULL_TIME:
                console.log("employee is full time ");
                 empHrs = 8;
                 empWageDay = empHrs * EMP_RATE_PER_HOUR ;
                console.log("employee Wage for a day ",empWageDay);
                 empWageMonth = empHrs * EMP_RATE_PER_HOUR * EMP_WORKING_DAYS_FOR_MONTH;
                console.log("employee Wage for a month ",empWageMonth);
                break;
            case IS_PART_TIME:
                console.log("employee is part time ");
                 empHrs = 4;
                 empWageDay = empHrs * EMP_RATE_PER_HOUR ;
                console.log("employee Wage for a day ",empWageDay);
                empWageMonth = empHrs * EMP_RATE_PER_HOUR * EMP_WORKING_DAYS_FOR_MONTH;
                console.log("employee Wage for a month ",empWageMonth);
                break;
            default:
               break;
        }
     }

    }

module.exports = new EmployeeWageProgram();