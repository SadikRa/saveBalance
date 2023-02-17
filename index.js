
document.getElementById('first-button').addEventListener('click', function(){
  const income =   document.getElementById('total-income');
  const totalIncome = income.value; 
  const totalIncomeNumber = parseFloat(totalIncome);


  const firstPrice =   document.getElementById('food-price');
  const foodrevenew = firstPrice.value; 
  const totalFoodNumbes = parseFloat(foodrevenew);


  const rentValue =   document.getElementById('rent-price');
  const rentPrice = rentValue.value; 
  const totalRentNumbes = parseFloat(rentPrice);



  const clothesValue =   document.getElementById('clothes-price');
  const clothesPrice = clothesValue.value; 
  const totalClothesNumbes = parseFloat(clothesPrice);

 const totalCosts = totalFoodNumbes + totalRentNumbes + totalClothesNumbes ;

 const oddBalance = totalIncomeNumber - totalCosts ;


 const costs = document.getElementById('total-cost');

costs.innerText = totalCosts;


const balances  = document.getElementById('balance-total')

balances.innerText = oddBalance ;



});


document.getElementById('save-button').addEventListener('click', function(){
   
    const savaBlance = document.getElementById('sava-balance');
    const inputValues = savaBlance.value;
    const inputValue = parseFloat(inputValues)
    const parcent = inputValue / 100 ;

    const calculateBalance = document.getElementById('balance-total')
    const tatolValue = calculateBalance.innerText;
    const balanceTotal = parseFloat(tatolValue);

    const savaBlances = parcent * balanceTotal ;

    const presentbalance = balanceTotal - savaBlances ;

    const savaBlancess = document.getElementById('sava-balancess');

    savaBlancess.innerText = savaBlances ;

    const presentbalances = document.getElementById('present-balance');

    presentbalances.innerText = presentbalance;



})