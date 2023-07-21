// Display current day
const currentDayElement = document.getElementById('currentDay');
const currentDate = new Date();

const options = {
  weekday: 'long', 
  month: 'long',
  day: 'numeric'
};

currentDayElement.textContent = currentDate.toLocaleDateString('en-US', options);

// Color code time blocks
const rows = document.querySelectorAll('.row');
let currentHour = currentDate.getHours();

rows.forEach(row => {

  const hour = parseInt(row.querySelector('.hour').textContent);
  
  const eventTextarea = row.querySelector('.event');

  // Check if block is past, present, or future
  if (hour < currentHour) {
    row.classList.add('past');
  } else if (hour === currentHour) {
    row.classList.add('present');
  } else {
    row.classList.add('future');
  }

  // Get events from localStorage
  let savedEvent = localStorage.getItem(`event-${hour}`);

  if (savedEvent) {
    eventTextarea.value = savedEvent;
  }

  // Save event to localStorage
  const saveButton = row.querySelector('.saveBtn');

  saveButton.addEventListener('click', () => {
    let eventText = eventTextarea.value;
    localStorage.setItem(`event-${hour}`, eventText);
  });
  
});