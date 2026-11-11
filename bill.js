const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter Customer Name: ", function(customerName) {
rl.question("Enter Customer Age: ", function(ageInput) {
rl.question("Enter Shopping Amount: ", function(amountInput) {
rl.question("Enter Membership Status (yes or no): ", function(membershipInput) {
rl.question("Enter Payment Method (credit, debit, or cash): ", function(paymentInput) {

  let age = Number(ageInput);
  let shoppingAmount = Number(amountInput);
  let membership = membershipInput.toLowerCase();
  let paymentMethod = paymentInput.toLowerCase();

  // 1. Reject negative shopping amounts
  if (shoppingAmount < 0) {
    console.log("Error: Shopping amount cannot be negative!");
    rl.close();
    return;
  }

  // 2. Reject invalid age values
  if (age < 0 || age > 120) {
    console.log("Error: Please enter a valid age!");
    rl.close();
    return;
  }

  // 2. Shopping Amount Discount
  let shoppingDiscount = 0;
  if (shoppingAmount < 2000) {
    shoppingDiscount = 0;
  } else if (shoppingAmount >= 2000 && shoppingAmount <= 4999) {
    shoppingDiscount = shoppingAmount * 0.05;
  } else if (shoppingAmount >= 5000 && shoppingAmount <= 9999) {
    shoppingDiscount = shoppingAmount * 0.10;
  } else if (shoppingAmount >= 10000) {
    shoppingDiscount = shoppingAmount * 0.20;
  }

  // 3. Membership Discount - Premium = yes
  let membershipDiscount = 0;
  if (membership === "yes" || membership === "premium") {
    membershipDiscount = shoppingAmount * 0.05;
  }

  // 4. Age Discount
  let ageDiscount = 0;
  if (age >= 60) {
    ageDiscount = shoppingAmount * 0.05;
  }

  // 5. Payment Method Discount
  let paymentDiscount = 0;
  if (paymentMethod === "credit") {
    paymentDiscount = shoppingAmount * 0.02;
  } else if (paymentMethod === "debit") {
    paymentDiscount = shoppingAmount * 0.03;
  } else if (paymentMethod === "cash") {
    paymentDiscount = shoppingAmount * 0.05;
  } else {
    paymentDiscount = 0;
  }

  // 7. Final Bill Calculation - Add all, do NOT compound
  let totalDiscount = shoppingDiscount + membershipDiscount + ageDiscount + paymentDiscount;
  let finalAmount = shoppingAmount - totalDiscount;

  // Bonus 1: VIP Shopper
  if (totalDiscount > 5000) {
    console.log("Congratulations! You are a VIP Shopper.");
  }

  // Bonus 2: Cashback - display separately, do NOT subtract
  let cashback = 0;
  if (finalAmount > 15000) {
    cashback = finalAmount * 0.02;
  }

  // 6. Additional Eligibility Conditions
  if (shoppingAmount > 10000 && (membership === "yes" || membership === "premium")) {
    console.log("Eligible for Free Gift!");
  }

  if (age < 18 || shoppingAmount < 500) {
    console.log("Not Eligible for Loyalty Rewards");
  } else {
    console.log("Eligible for Loyalty Rewards");
  }

  if (age >= 60 && shoppingAmount > 5000) {
    console.log("Eligible for Senior Citizen Benefits");
  }

  // Final Bill Display
  console.log("----- SMART SHOPPING MALL BILL -----");
  console.log("Customer Name: " + customerName);
  console.log("Age: " + age);
  console.log("Original Shopping Amount: Rs." + shoppingAmount);
  console.log("Shopping Discount: Rs." + shoppingDiscount);
  console.log("Membership Discount: Rs." + membershipDiscount);
  console.log("Age Discount: Rs." + ageDiscount);
  console.log("Payment Discount: Rs." + paymentDiscount);
  console.log("Total Discount: Rs." + totalDiscount);
  console.log("Final Payable Amount: Rs." + finalAmount);
  if (cashback > 0) {
    console.log("Cashback Earned (2%): Rs." + cashback);
  }
  console.log("------------------------------------");

  rl.close();
});
});
});
});
});