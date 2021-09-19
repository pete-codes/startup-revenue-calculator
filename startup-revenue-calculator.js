

    function findRevenueHour() {
      revenue = document.getElementById("revenue").value;
      hours = document.getElementById('hours').value;
    minWage = document.getElementById("minWage").value;
    
      document.getElementById("explanation").innerHTML = "You earned $" + Math.round(revenue / hours) + " per hour this month from your side project"
    
      document.getElementById("minWageComparison").innerHTML = "You earned " + Math.round(revenue/hours)/minWage *100  + "% of your area's hourly minimum wage";
    
    };
    
   