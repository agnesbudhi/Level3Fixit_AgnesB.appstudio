let loan = 0
let duration = 0
let interest = 0


// a function named carLoanPayment that takes 3 arguments and returns the monthly payment to the main program. 

function carLoanPayment(loan, duration, interest) {
  let carPayment = loan * (1+(interest/100)) / (duration * 12)
  }
  return carPayment
  
  
/* a function named homeLoanPayment that takes 3 arguments and returns the monthly payment to the main program.
Term can only be 15 or 30 years.
*/


// main program that asks the user which calculator they want to use, gets their data and calls the function. 
let calculator = prompt('Which calculator would you like to use: car or home?')
if ( calculator == 'car' || calculator == 'Car') {
  do {
    let loan = prompt('How much is your loan amount? Do not include $ or commas')
    let duration = prompt('How many years do you have this loan?')
    let interest = prompt('What is your interest rate in %?')
    carLoanPayment(loan, duration, interest);
    alert(`A car loan for $ ${loan} over ${duration} years at ${interest} % would have a monthly payment of %{carPayment}`);
    let response = prompt('If you would like to make another calculation, enter Continue, otherwise enter Done');
    } while (response == 'Continue');
} else if (calculator == 'home' || calculator == 'Home') {

} else if (calculator == 'done' || calculator == 'Done') {
  alert('Thanks! Have a nice day')
}
/* main program that gets the answer back from the function and outputs it to an alert in this format: 
     A home loan for $200,000 over 30 years at 5.7% interest would have a monthly payment of $1160.80.
OR
     A car loan for $30,000 over 60 months at 3.2% interest would have a monthly payment of $542.00
*/

  