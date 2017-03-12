const TAX_RATE = .08;
const PHONE_PRICE = 99.99;
const ACC_PRICE = 9.99;

var bank_balance = 333.33;
var amount = 0;

function calcTax(amount) {
    amount += amount * .08;
    return amount;
}

function printPrice(price) {
  return "$" + price.toFixed(2);
}

console.log("Bank Balance = " + printPrice(bank_balance));

var i = 1;
while (bank_balance > PHONE_PRICE) {

   // Show what number of phone purchase they are on
    console.log("Buying phone number: " + i);

    // Show the price of the phone
    console.log("Price = " + printPrice(PHONE_PRICE));

    // Get and show the price of the phone after tax
    var priceAfterTax = calcTax(PHONE_PRICE);
    console.log("Price after Tax = " + printPrice(priceAfterTax));

    // Minus purchase from bank account
    bank_balance -= priceAfterTax;

    if (bank_balance > 0) {
        console.log("New Balance = " + bank_balance.toFixed(2));
    } else {
        console.log("You can't afford phone number: " + i);
    }

    if(bank_balance > ACC_PRICE)
    {
      console.log("\n\tBuying Accessory");

      // Show the price of the Accessory
      console.log("\tPrice = " + printPrice(ACC_PRICE));

      // Get and show the price of the phone after tax
      var accAfterTax = calcTax(ACC_PRICE);
      console.log("\tPrice after Tax = " + printPrice(accAfterTax));

      // Minus purchase from bank account
      bank_balance -= accAfterTax;
      console.log("\tNew Balance = " + bank_balance.toFixed(2));
    }
    console.log("");
    i++;
}

console.log("You have " + printPrice(bank_balance) + " left, not enough for another phone");
