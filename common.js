function getValue(id) {
    const element = document.getElementById(id);
    const value = element.value;
    return parseFloat(value);
  }
  
  document.getElementById('first-button').addEventListener('click', function() {
    const totalIncomeNumber = getValue('total-income');
    const totalFoodNumbes = getValue('food-price');
    const totalRentNumbes = getValue('rent-price');
    const totalClothesNumbes = getValue('clothes-price');
  
    const totalCosts = totalFoodNumbes + totalRentNumbes + totalClothesNumbes;
    const oddBalance = totalIncomeNumber - totalCosts;
  
    const costs = document.getElementById('total-cost');
    costs.innerText = totalCosts;
  
    const balances = document.getElementById('balance-total');
    balances.innerText = oddBalance;
  });
  
  document.getElementById('save-button').addEventListener('click', function() {
    const inputValue = getValue('sava-balance');
    const parcent = inputValue / 100;
  
    const balanceTotal = getValue('balance-total');
    const savaBlances = parcent * balanceTotal;
    const presentbalance = balanceTotal - savaBlances;
  
    const savaBlancess = document.getElementById('sava-balancess');
    savaBlancess.innerText = savaBlances;
  
    const presentbalances = document.getElementById('present-balance');
    presentbalances.innerText = presentbalance;
  });
  