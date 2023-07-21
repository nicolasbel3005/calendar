// Display current day
const currentDayElement = $('#currentDay');
const currentDate = new Date();

const options = {
  weekday: 'long', 
  month: 'long',
  day: 'numeric'
};

currentDayElement.text( currentDate.toLocaleDateString('en-US', options));

// Color code time blocks
// const rows = document.querySelectorAll('.row');
const rows = $(".row")
let currentHour = currentDate.getHours() -12
console.log(rows)
rows.each((index,row) => {
  var timeblockhour = $(row).attr("id").split("-")[1]
  console.log(currentHour,timeblockhour, currentHour==timeblockhour)

  // const hour = parseInt(row.querySelector('.hour').textContent);
  
  const eventTextarea = $(row).children('.description');

  // // Check if block is past, present, or future
  if (timeblockhour < currentHour) {
   $(row).addClass('past');
  } else if (timeblockhour == currentHour) {
    $(row).addClass('present');
  } else {
  $(row).addClass('future');
  }

  // Get events from localStorage
  let savedEvent = localStorage.getItem(`event-${timeblockhour}`);

  if (savedEvent) {
    eventTextarea.val (savedEvent);
  }

  // Save event to localStorage
  const saveButton =$(row).children ('.saveBtn');

  saveButton.on('click', () => {
    let eventText = eventTextarea.val();
    localStorage.setItem(`event-${timeblockhour}`, eventText);
  });
  
});