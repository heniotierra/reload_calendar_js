const {
  createDiv,
  createElementText,
  createFlexRow,
  createFlexColumn,
} = require("./dom");
const {
  formatDate,
} = require("./dates");
const {
  getDate,
  getYear,
  getMonth,
} = require("date-fns");

const createSchedule = () => {
  const scheduleAppointments = state.getScheduleAppointments();
  const scheduleContent = document.getElementById("schedule-content");
  scheduleContent.innerHTML = "";
  if (scheduleAppointments && scheduleAppointments.length) {  
    scheduleAppointments.forEach((appointment, i)=> {
      const startDate = new Date(appointment.startDate);
      const endDate = new Date(appointment.endDate);
      const row = createFlexRow("schedule-dates", `a${i}`);
      const col1 = createFlexColumn("", `c${i}1`);
      const col2 = createFlexColumn("", `c${i}2`);
      col1.innerText = `Start: ${formatDate(getYear(startDate),getMonth(startDate),getDate(startDate))}`;
      col2.innerText = `End: ${formatDate(getYear(endDate),getMonth(endDate),getDate(endDate))}`;
      row.appendChild(col1);
      row.appendChild(col2);
      scheduleContent.appendChild(row);
    });
    return;
  }
  const noAppointmentsDiv = createDiv();
  noAppointmentsDiv.setAttribute("class", "schedule-dates");
  noAppointmentsDiv.setAttribute("key", "a1");
  const black = document.createElement("b");
  black.innerText = "You have no scheduled appointments";
  noAppointmentsDiv.appendChild(black);
  scheduleContent.appendChild(noAppointmentsDiv);
};

window.schedule = {
  createSchedule,
};
