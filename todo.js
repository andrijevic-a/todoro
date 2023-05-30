const toDoBtn = document.getElementById('todo-btn');

const toDoSection = document.getElementById('todo-section');
const showAddToDoCard = document.getElementById('adding-todo-section');
const showEditToDoCard = document.getElementById('editing-todo-section');

const addBtnToDoHandler = document.querySelectorAll('#add-todo');
const addBtnToDo = document.getElementById('submit-add-todo');

const editBtnToDoHandler = document.querySelectorAll('.todo-entry');
const editBtnToDo = document.getElementById('submit-edit-todo');

const undoneBtn = document.querySelectorAll('.clock')
const doneBtn = document.querySelectorAll('.clock-full')

// SHOW

const todoShow = () => {
  main.style.display = 'none';
  toDoSection.style.display = 'flex';
}

toDoBtn.addEventListener('click', todoShow);

// ADD

const todoShowAdd = () => {
  showAddToDoCard.style.display = 'flex';
}

addBtnToDoHandler.forEach(element => {
  element.addEventListener('click', todoShowAdd);
});

// EDIT

const todoShowEdit = () => {
  showEditToDoCard.style.display = 'flex';
}

editBtnToDoHandler.forEach(element => {
  element.addEventListener('click', todoShowEdit);
});

// CLOSE

const closeToDoPopUp = () => {
  showAddToDoCard.style.display = 'none';
  showEditToDoCard.style.display = 'none';
}

closeBtn.forEach(element => {
  element.addEventListener('click', closeToDoPopUp);
});

cancelBtn.forEach(element => {
  element.addEventListener('click', closeToDoPopUp);
});

const backClickerToDo = () => {
  main.style.display = 'flex';
  toDoSection.style.display = 'none';
}

backBtn.forEach(element => {
  element.addEventListener('click', backClickerToDo);
});

// TO-DO DONNESS

undoneBtn.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    doneBtn[index].style.display = 'block';
    undoneBtn[index].style.display = 'none';
    editBtnToDoHandler[index].style.opacity = '0.5';
    editBtnToDoHandler[index].style.textDecorationLine = 'line-through';
  });
});

doneBtn.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    undoneBtn[index].style.display = 'block';
    doneBtn[index].style.display = 'none';
    editBtnToDoHandler[index].style.opacity = '1';
    editBtnToDoHandler[index].style.textDecorationLine = 'none';
  });
});