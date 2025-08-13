// Task-3:

// Your task is to calculate the total budget required to buy electronics:

//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

function calculateElectronicsBudget (laptopQuantity, tabletQuantity, mobileQuantity){
  const laptop = 35000;
  const tablet = 15000;
  const mobile = 20000;

  const totalLaptopPrice = laptop * laptopQuantity;
  const totalTabletPrice = tablet * tabletQuantity;
  const totalMobilePrice = mobile * mobileQuantity;

  return totalLaptopPrice + totalTabletPrice + totalMobilePrice;
}

console.log(calculateElectronicsBudget(2, 2, 2));