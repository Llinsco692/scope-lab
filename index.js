// Write your solution in this file!
// Declare a global variable 'customerName' with the value 'bob'
var customerName = 'bob';

// Function to uppercase the global 'customerName'
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Function to set 'bestCustomer' to 'not bob' globally
function setBestCustomer() {
  bestCustomer = 'not bob';  // Declaring a global variable 'bestCustomer'
}

// Function to overwrite 'bestCustomer' globally with 'maybe bob'
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';  // Overwriting 'bestCustomer'
}

// Declare a constant 'leastFavoriteCustomer'
const leastFavoriteCustomer = 'Alice';

// Function to attempt changing 'leastFavoriteCustomer' (which is a constant)
function changeLeastFavoriteCustomer() {
  // This will throw an error because 'leastFavoriteCustomer' is a constant
  leastFavoriteCustomer = 'Bob';  // This will result in an error
}
