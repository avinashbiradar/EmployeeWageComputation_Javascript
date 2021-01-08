const IS_FULL_TIME = 1;
const IS_PART_TIME = 2;
const EMP_RATE_PER_HOUR=20;
const EMP_WORKING_DAYS_FOR_MONTH=20;
const WORKING_DAYS=20;
const MAX_HOURS_IN_A_MONTH=100
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
        let totalWage=0;
        let totalWorkingDays=0;
		let totalWorkHours=0;
        let  empCheck = Math.floor(Math.random() * 10) % 3;
        while (totalWorkHours<MAX_HOURS_IN_A_MONTH && totalWorkingDays < WORKING_DAYS) {
        switch(empCheck){
            case  IS_FULL_TIME:
                console.log("employee is full time ");
                 empHrs = 8;
                 empWageDay = empHrs * EMP_RATE_PER_HOUR ;
                console.log("employee Wage for a day ",empWageDay);
                 empWageMonth = empHrs * EMP_RATE_PER_HOUR * EMP_WORKING_DAYS_FOR_MONTH;
               console.log("employee Wage for a month ",empWageMonth);
                 totalWorkHours = totalWorkHours+empHrs;
                break;
            case IS_PART_TIME:
                console.log("employee is part time ");
                 empHrs = 4;
                 empWageDay = empHrs * EMP_RATE_PER_HOUR ;
                console.log("employee Wage for a day ",empWageDay);
                empWageMonth = empHrs * EMP_RATE_PER_HOUR * EMP_WORKING_DAYS_FOR_MONTH;
                console.log("employee Wage for a month ",empWageMonth);
               totalWorkHours = totalWorkHours+empHrs;
                break;
            default:
               break;
        }
        totalWorkingDays++;
     }
     totalWage=(totalWorkHours*totalWorkingDays*EMP_RATE_PER_HOUR);
     console.log("Total wage of employee is : ",totalWage);
    }
}

module.exports = new EmployeeWageProgram();