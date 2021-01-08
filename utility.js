const IS_FULL_TIME = 1;
const IS_PART_TIME = 2;
const EMP_RATE_PER_HOUR=20;
const EMP_WORKING_DAYS_FOR_MONTH=20;
const WORKING_DAYS=20;
const MAX_HOURS_IN_A_MONTH=100;
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
var STORE_DAILY_WAGES = [];
var STORE_TOTAL_WAGES = [];
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
                 empWageDay = FULL_TIME_HOURS * EMP_RATE_PER_HOUR ;
                console.log("employee Wage for a day ",empWageDay);
                 empWageMonth = FULL_TIME_HOURS * EMP_RATE_PER_HOUR * EMP_WORKING_DAYS_FOR_MONTH;
               console.log("employee Wage for a month ",empWageMonth);
                 totalWorkHours = totalWorkHours+FULL_TIME_HOURS;
                break;
            case IS_PART_TIME:
                console.log("employee is part time ");
                 empWageDay = PART_TIME_HOURS * EMP_RATE_PER_HOUR ;
                console.log("employee Wage for a day ",empWageDay);
                empWageMonth = PART_TIME_HOURS * EMP_RATE_PER_HOUR * EMP_WORKING_DAYS_FOR_MONTH;
                console.log("employee Wage for a month ",empWageMonth);
               totalWorkHours = totalWorkHours+PART_TIME_HOURS;
                break;
            default:
               break;
        }
        totalWorkingDays++;
        STORE_DAILY_WAGES.push(empWageDay);
     }
     totalWage=(totalWorkHours*totalWorkingDays*EMP_RATE_PER_HOUR);
     STORE_TOTAL_WAGES.push(totalWage);
     console.log("Total wage of employee is : ",totalWage);
     console.log("store daily wages :: ", STORE_DAILY_WAGES);
     console.log("store total wages :: ", STORE_TOTAL_WAGES);
      return totalWage;
    }

    workingHours= (empWageDay) => {
        let workingHours=empWageDay/EMP_RATE_PER_HOUR;
        console.log("Work Hours::",workingHours);
    }

}
module.exports = new EmployeeWageProgram();