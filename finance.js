const financeBtn = document.getElementById('finance-btn');

const financeSection = document.getElementById('finance-section');
const showAddFinanceCard = document.getElementById('adding-finance-section');
const showEditFinanceCard = document.getElementById('editing-finance-section');

const addBtnFinanceHandler = document.querySelectorAll('#add-finance');
const addBtnFinance = document.getElementById('submit-add-finance');

const editBtnFinanceHandler = document.querySelectorAll('.finance-input');
const editBtnFinance = document.getElementById('submit-edit-finance');


// SHOW

const financeShow = () => {
  main.style.display = 'none';
  financeSection.style.display = 'flex';
}

financeBtn.addEventListener('click', financeShow);

// ADD

const financeShowAdd = () => {
  showAddFinanceCard.style.display = 'flex';
}

addBtnFinanceHandler.forEach(element => {
  element.addEventListener('click', financeShowAdd);
});

// EDIT

const financeShowEdit = () => {
  showEditFinanceCard.style.display = 'flex';
}

editBtnFinanceHandler.forEach(element => {
  element.addEventListener('click', financeShowEdit);
});

// CLOSE

const closeFinancePopUp = () => {
  showAddFinanceCard.style.display = 'none';
  showEditFinanceCard.style.display = 'none';
}

closeBtn.forEach(element => {
  element.addEventListener('click', closeFinancePopUp);
});

cancelBtn.forEach(element => {
  element.addEventListener('click', closeFinancePopUp);
});

const backClickerFinance = () => {
  main.style.display = 'flex';
  financeSection.style.display = 'none';
}

backBtn.forEach(element => {
  element.addEventListener('click', backClickerFinance);
});

