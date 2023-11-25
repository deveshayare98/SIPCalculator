function calculateSIP(principal, monthlyInvestment, interestRate, timeInYears) {
    const monthlyInterestRate = interestRate / 12 / 100;
    const totalMonths = timeInYears * 12;
  
    let futureValue = 0;
    for (let i = 0; i < totalMonths; i++) {
      futureValue += monthlyInvestment;
      futureValue *= 1 + monthlyInterestRate;
    }
    // Round the future value to two decimal places
    futureValue = Math.round(futureValue * 100) / 100;
  
    return futureValue.toFixed(2);
  }
  

  

export default calculateSIP;