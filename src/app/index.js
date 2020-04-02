const {
  getMonth,
  getYear,
} = require("date-fns");
require("./lib/state");
require("./lib/calendar");
require("./lib/schedule");

const init = () => {
  const todayTime = new Date();
  state.setCurrentMonth(getMonth(todayTime));
  state.setCurrentYear(getYear(todayTime));
  schedule.createSchedule();
  calendar.createCalendarBody();
};

if (window.cordova) {
  document.addEventListener('deviceready', () => {
    init();
  }, false);
} else {
  window.addEventListener("load",()=>{  
    init();
  }, false);
}
