const toDoForm = document.getElementById('todo-form');

toDoForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(toDoForm);
  const data = {};
  for (const [key, value] of formData.entries()) {
    data[key] = value;
  }

  const contentGroupCreation = document.createElement('div');
  contentGroupCreation.classList = 'content-group';
  contentGroupCreation.id = 'edit-todo';
  const contentGroupCreationCard = document.createElement('div');
  contentGroupCreationCard.classList = 'content-group';

  const toDoImgContainer = document.createElement('div');
  toDoImgContainer.classList = 'clocks'
  const toDoImgContainerCard = document.createElement('div');
  toDoImgContainerCard.classList = 'clocks'

  const toDoImg = document.createElement('img');
  toDoImg.classList = 'clock';
  toDoImg.src = './img/clock.png';

  const toDoImgCard = document.createElement('img');
  toDoImgCard.classList = 'clock';
  toDoImgCard.src = './img/clock.png';

  const toDoImgFull = document.createElement('img');
  toDoImgFull.classList = 'clock-full';
  toDoImgFull.src = './img/clock-full.png';

  const toDoImgFullCard = document.createElement('img');
  toDoImgFullCard.classList = 'clock-full';
  toDoImgFullCard.src = './img/clock-full.png';

  toDoImgContainer.append(toDoImg, toDoImgFull);
  toDoImgContainerCard.append(toDoImgCard, toDoImgFullCard);

  const elContainer = document.createElement('button');
  elContainer.classList = ('text-button todo-entry');

  const elContainerCard = document.createElement('button');
  elContainerCard.classList = ('todo-input todo-entry-2');

  const timeEl = document.createElement('span');
  timeEl.textContent = `${data.toDoTime}`;
  const titleEl = document.createElement('span');
  titleEl.textContent = `${data.toDoTitle}`;
  const timeElCard = document.createElement('span');
  timeElCard.textContent = `${data.toDoTime}`;
  const titleElCard = document.createElement('span');
  titleElCard.textContent = `${data.toDoTitle}`;

  const addDeleteBtn = document.createElement('button');
  addDeleteBtn.classList = 'delete';
  const addDeleteBtnCard = document.createElement('button');
  addDeleteBtnCard.classList = 'delete';

  
  elContainer.appendChild(timeEl);
  elContainer.appendChild(titleEl);
  elContainerCard.append(timeElCard, titleElCard);
  contentGroupCreation.append(toDoImgContainer, elContainer, addDeleteBtn);
  contentGroupCreationCard.append(toDoImgContainerCard, elContainerCard, addDeleteBtnCard);
  
  const containerFinder = document.querySelector('.todo-container');
  containerFinder.appendChild(contentGroupCreation);

  const containerFinderCard = document.querySelector('.todo-container-card');
  containerFinderCard.appendChild(contentGroupCreationCard);

  contentGroupCreation.addEventListener('mouseenter', () => {
    addDeleteBtn.style.display = 'block';
  });
  contentGroupCreation.addEventListener('mouseleave', () => {
    addDeleteBtn.style.display = 'none';
  });
  contentGroupCreationCard.addEventListener('mouseenter', () => {
    addDeleteBtnCard.style.display = 'block';
  });
  contentGroupCreationCard.addEventListener('mouseleave', () => {
    addDeleteBtnCard.style.display = 'none';
  });

  elContainer.addEventListener('click', todoShowEdit);
  elContainerCard.addEventListener('click', todoShowEdit);

  const toDoChecker = (element, eventType, fullImg, img, contStyle) => {
    element.addEventListener(`${eventType}`, () => {
      fullImg.style.display = 'block';
      img.style.display = 'none';
      contStyle.style.opacity = '0.5';
      contStyle.style.textDecorationLine = 'line-through';
    });    
  }

  const toDoUnchecker = (element, eventType, fullImg, img, contStyle) => {
    element.addEventListener(`${eventType}`, () => {
      img.style.display = 'block';
      fullImg.style.display = 'none';
      contStyle.style.opacity = '1';
      contStyle.style.textDecorationLine = 'none';
    });
  }

  toDoChecker(toDoImg, 'click', toDoImgFull, toDoImg, elContainer);
  toDoChecker(toDoImgCard, 'click', toDoImgFullCard, toDoImgCard, elContainerCard);
  toDoUnchecker(toDoImgFull, 'click', toDoImgFull, toDoImg, elContainer);
  toDoUnchecker(toDoImgFullCard, 'click', toDoImgFullCard, toDoImgCard, elContainerCard);

  const deleteHandler = (btn) => {
    btn.addEventListener('click', () => {
      contentGroupCreation.remove();
      contentGroupCreationCard.remove();
    });
  }

  deleteHandler(addDeleteBtn);
  deleteHandler(addDeleteBtnCard);
  deleteHandler(addDeleteBtnCard);
  closeToDoPopUp();
});