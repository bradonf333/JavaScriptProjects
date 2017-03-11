console.log("You have $900");

var phones = ["iPhone 7+", "Galaxy S8", "Google Pixel"];
var phonePrice = ["$150", "$175", "$300"];
var acc = ["Phone Case", "Charger", "Screen Protector"];
var accPrice = ["$35", "$50", "$50"];

printPhoneInfo();
// Write the array
phones.forEach((item) => {
    console.log(item);
});


function printPhoneInfo()
{
  console.log("Here are your phone options:")
  console.log("Phone\t\t" + "Price");

  for(var i = 0; i < phones.length; i++)
  {
    console.log(phones[i] + "\t" + phonePrice[i]);
  }
}





/*while(bankAccount > 0)
{

}*/
