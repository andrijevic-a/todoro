const calendarBtn = document.getElementById('calendar-btn');

const main = document.getElementById('cards-main');
const calendarSection = document.getElementById('calendar-section');
const showAddCalendarCard = document.getElementById('adding-calendar-section');
const showEditCalendarCard = document.getElementById('editing-calendar-section');

const addBtnCalendarHandler = document.querySelectorAll('#add-calendar');
const addBtnCalendar = document.getElementById('submit-add-calendar');

const editBtnCalendarHandler = document.querySelectorAll('.calendar-entry-2');
const editBtnCalendar = document.getElementById('submit-edit-calendar');

const closeBtn = document.querySelectorAll('#close-btn');
const backBtn = document.querySelectorAll('.back');
const cancelBtn = document.querySelectorAll('.cancel');
const homeBtn = document.getElementById('home');
// const lightSwitchBtn = document.getElementById('dark-switch');
// const rootSelector = document.querySelector(':root');

// const changer = () => {
//   rootSelector.style.whiteColor = '#333';
// }

// lightSwitchBtn.addEventListener('click', changer);

const calendarShow = () => {
  main.style.display = 'none';
  calendarSection.style.display = 'flex';
}

calendarBtn.addEventListener('click', calendarShow);

const calendarShowAdd = () => {
  showAddCalendarCard.style.display = 'flex';
}

addBtnCalendarHandler.forEach(element => {
  element.addEventListener('click', calendarShowAdd);
});

const calendarShowEdit = () => {
  showEditCalendarCard.style.display = 'flex';
}

editBtnCalendarHandler.forEach(element => {
  element.addEventListener('click', calendarShowEdit);
  // element.addEventListener('click', placeholderChanger);
});

const closeCalendarPopUp = () => {
  showAddCalendarCard.style.display = 'none';
  showEditCalendarCard.style.display = 'none';
}

closeBtn.forEach(element => {
  element.addEventListener('click', closeCalendarPopUp);
});

cancelBtn.forEach(element => {
  element.addEventListener('click', closeCalendarPopUp);
});

const backClicker = () => {
  main.style.display = 'flex';
  calendarSection.style.display = 'none';
}

backBtn.forEach(element => {
  element.addEventListener('click', backClicker);
});

const homeClicker = () => {
  main.style.display = 'flex';
  calendarSection.style.display = 'none';
  toDoSection.style.display = 'none';
  financeSection.style.display = 'none';
}

homeBtn.addEventListener('click', homeClicker);



// Delete entry btn

const contBtn = document.querySelectorAll('.content-group');
const deleteBtn = document.querySelectorAll('.delete');
const deleteImg = document.querySelectorAll('.delete-img');
const deleteOpenImg = document.querySelectorAll('.delete-open-img');

contBtn.forEach((btn, index) => {
  btn.addEventListener('mouseenter', () => {
    deleteBtn[index].style.display = 'block';
  });
  btn.addEventListener('mouseleave', () => {
    deleteBtn[index].style.display = 'none';
  });
});