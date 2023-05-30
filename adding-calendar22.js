const createContentGroup = (imgSrc, date, title, onDelete) => {
  const contentGroup = document.createElement('div');
  contentGroup.classList = 'content-group';

  const img = document.createElement('img');
  img.src = imgSrc;

  const elContainer = document.createElement('button');
  elContainer.classList = 'text-button calendar-entry-2';

  const dateEl = document.createElement('span');
  dateEl.textContent = date;

  const titleEl = document.createElement('span');
  titleEl.textContent = title;

  const deleteBtn = document.createElement('button');
  deleteBtn.classList = 'delete';
  deleteBtn.addEventListener('click', onDelete);

  elContainer.append(dateEl, titleEl);
  contentGroup.append(img, elContainer, deleteBtn);

  contentGroup.addEventListener('mouseenter', () => {
    deleteBtn.style.display = 'block';
  });

  contentGroup.addEventListener('mouseleave', () => {
    deleteBtn.style.display = 'none';
  });

  return contentGroup;
};

const createContentGroupCard = (imgSrc, date, title, onDelete) => {
  const contentGroupCard = createContentGroup(imgSrc, date, title, onDelete);
  contentGroupCard.classList.add('content-group-card');

  const elContainerCard = contentGroupCard.querySelector('.calendar-entry-2');
  elContainerCard.classList.add('calendar-input');

  return contentGroupCard;
};

const calendarForm = document.getElementById('calendar-form');

const handleFormSubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(calendarForm);
  const date = formData.get('calendarDate');
  const title = formData.get('calendarTitle');

  const onDelete = () => {
    contentGroup.remove();
    contentGroupCard.remove();
  };

  const contentGroup = createContentGroup('./img/calendar.png', date, title, onDelete);
  const contentGroupCard = createContentGroupCard('./img/calendar.png', date, title, onDelete);

  const container = document.querySelector('.calendar-container');
  const containerCard = document.querySelector('.calendar-container-card');

  container.appendChild(contentGroup);
  containerCard.appendChild(contentGroupCard);
  closeCalendarPopUp();
};

calendarForm.addEventListener('submit', handleFormSubmit);
