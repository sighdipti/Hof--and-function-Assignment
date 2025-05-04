const PriceList = [
    { nam: "Laptop", price: 120000 },
    { nam: "Mobile", price: 70000 },
  
    { nam: "Mobile Charger", price: 1500 },
  
    { nam: "Laptop Charger", price: 10500},
  ];
  
  let sum = 0;
  PriceList.forEach((data) => (sum += data.price));
  console.log(`The total price is Rs.${sum}`);