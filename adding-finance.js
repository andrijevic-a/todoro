let incomeValueHome = document.querySelector('.income-value');
let expensesValueHome = document.querySelector('.expenses-value');
let totalValueHome = document.querySelector('.total-value');
let savingsValueHome = document.querySelector('.savings-value');
let investmentsValueHome = document.querySelector('.investments-value');
 
const financeForm = document.getElementById('finance-form');

const incomeCard = document.getElementById('income-card');
const incomeCardContainer = incomeCard.querySelector('.container');
const expensesCard = document.getElementById('expenses-card');
const expensesCardContainer = expensesCard.querySelector('.container');

let savingsItemValue = document.getElementById('savings-item-value');
let investmentsItemValue = document.getElementById('investments-item-value');

let incomeItemValues = [];
let expensesItemValues = [];
let saiItemValues = [];

let incomeTotalValue = document.getElementById('income-total-value');
let expensesTotalValue = document.getElementById('expenses-total-value');
let saiTotalValue = document.getElementById('sai-total-value');

financeForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(financeForm);
  const data = {};
  for (const [key, value] of formData.entries()) {
    data[key] = value;
  }
  
  const incomeContentGroupBuilder = () => {
    const img1 = document.createElement('img');
    img1.src = './img/check-full-green.png'
    img1.classList = 'checked-income-entry';

    const img2 = document.createElement('img');
    img2.src = './img/check-green.png'
    img2.classList = 'unchecked-income-entry';
  
    const btn = document.createElement('button');
    btn.classList = 'finance-input income-entry';
    
    const itemName = document.createElement('div');
    const itemValue = document.createElement('div');
    itemValue.classList = 'income-item-value';
  
    itemName.textContent = `${data.financeTitle}`;
    itemValue.textContent = `${data.financeCurrency}${data.financeAmount}`;

    btn.append(itemName, itemValue)
    
    const del = document.createElement('button');
    del.classList = 'delete';

    del.addEventListener('click', () => {
      incomeContentContainer.remove();
      const index = incomeItemValues.indexOf(parseInt(data.financeAmount));
      if (index !== -1) {
        incomeItemValues.splice(index, 1);
        incomeTotalUpdate();
      }
      incomeValueHome.textContent = incomeTotalValue.textContent;
      totalValueHome.textContent = parseInt(incomeTotalValue.textContent) - parseInt(expensesTotalValue.textContent);
    });
    
    const incomeContentContainer = document.createElement('div'); 
    incomeContentContainer.classList = 'content-group';
    
    incomeContentContainer.append(img1, img2, btn, del);
    incomeCardContainer.append(incomeContentContainer);
    
    incomeItemValues.push(parseInt(data.financeAmount));

    const incomeTotalUpdate = () => {
      const sum = incomeItemValues.reduce((total, number) => total + number, 0);
      incomeTotalValue.textContent = sum;
    };

    incomeTotalUpdate();

    incomeContentContainer.addEventListener('mouseenter', () => {
      del.style.display = 'block';
    });
  
    incomeContentContainer.addEventListener('mouseleave', () => {
      del.style.display = 'none';
    });

    img1.addEventListener('click', () => {
      img1.style.display = 'none';
      img2.style.display = 'block';
      incomeContentContainer.style.opacity = '0.5'
    })

    img2.addEventListener('click', () => {
      img2.style.display = 'none';
      img1.style.display = 'block';
      incomeContentContainer.style.opacity = '1'
    })
  }

  const expensesContentGroupBuilder = () => {
    const img1 = document.createElement('img');
    img1.src = './img/check-full-red.png'
    img1.classList = 'checked-expenses-entry';

    const img2 = document.createElement('img');
    img2.src = './img/check-red.png'
    img2.classList = 'unchecked-expenses-entry';
  
    const btn = document.createElement('button');
    btn.classList = 'finance-input expenses-entry';
    
    const itemName = document.createElement('div');
    const itemValue = document.createElement('div');
    itemValue.classList = 'expenses-item-value';
  
    itemName.textContent = `${data.financeTitle}`;
    itemValue.textContent = `${data.financeCurrency}${data.financeAmount}`;
  
    btn.append(itemName, itemValue)

    const del = document.createElement('button');
    del.classList = 'delete';

    del.addEventListener('click', () => {
      expensesContentContainer.remove();
      const index = expensesItemValues.indexOf(parseInt(data.financeAmount));
      if (index !== -1) {
        expensesItemValues.splice(index, 1);
        expensesTotalUpdate();
      }
      expensesValueHome.textContent = expensesTotalValue.textContent;
      totalValueHome.textContent = parseInt(incomeTotalValue.textContent) - parseInt(expensesTotalValue.textContent);
    });

    const expensesContentContainer = document.createElement('div'); 
    expensesContentContainer.classList = 'content-group';

    expensesContentContainer.append(img1, img2, btn, del);
    expensesCardContainer.append(expensesContentContainer);
    expensesItemValues.push(parseInt(data.financeAmount));
    const expensesTotalUpdate = () => {
      const sum = expensesItemValues.reduce((total, number) => total + number, 0);
      expensesTotalValue.textContent = sum;
    };

    expensesTotalUpdate();

    expensesContentContainer.addEventListener('mouseenter', () => {
      del.style.display = 'block';
    });
  
    expensesContentContainer.addEventListener('mouseleave', () => {
      del.style.display = 'none';
    });

    img1.addEventListener('click', () => {
      img1.style.display = 'none';
      img2.style.display = 'block';
      expensesContentContainer.style.opacity = '0.5'
    })

    img2.addEventListener('click', () => {
      img2.style.display = 'none';
      img1.style.display = 'block';
      expensesContentContainer.style.opacity = '1'
    })
  }

  const saiContentGroupBuilder = () => {
  if (data.financeType === 'Savings') {
  const savingsContentGroupBuilder = () => {
    savingsItemValue.textContent = parseInt(savingsItemValue.textContent) + parseInt(data.financeAmount);

    // let curDisplay = document.querySelector('.cur-display');
    // curDisplay.textContent = data.financeCurrency + savingsItemValue;
  }
  savingsContentGroupBuilder();
  expensesContentGroupBuilder();
  } 
  else if (data.financeType === 'Investments') {
  const investmentsContentGroupBuilder = () => {
    investmentsItemValue.textContent = parseInt(investmentsItemValue.textContent) + parseInt(data.financeAmount);

    // let curDisplay = document.querySelector('.cur-display');
    // curDisplay.textContent = data.financeCurrency + investmentsItemValue;
  }
  investmentsContentGroupBuilder();
  expensesContentGroupBuilder();
  }
  saiTotalValue.textContent = parseInt(savingsItemValue.textContent) + parseInt(investmentsItemValue.textContent);
  }
  

  if (data.financeType === 'Income') {
    incomeContentGroupBuilder();
  }

  else if (data.financeType === 'Expenses') {
    expensesContentGroupBuilder();
  }
  
  else if (data.financeType === 'Savings' || data.financeType === 'Investments'){
    saiContentGroupBuilder();
  }
  

  incomeValueHome.textContent = incomeTotalValue.textContent;
  expensesValueHome.textContent = expensesTotalValue.textContent;
  totalValueHome.textContent = parseInt(incomeTotalValue.textContent) - parseInt(expensesTotalValue.textContent);
  savingsValueHome.textContent = savingsItemValue.textContent;
  investmentsValueHome.textContent = investmentsItemValue.textContent;
});

