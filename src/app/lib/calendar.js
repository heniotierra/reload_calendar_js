const {
  createDiv,
  createElementText,
  createFlexRow,
  createFlexColumn,
} = require("./dom");
const {
  getStartOfMonth,
  getEndOfMonth,
  getDayOfWeek,
  formatYearMonth,
} = require("./dates");
const {
  generateNumberSequence,
} = require("./generators");

const seePrevMonth = () => {
  const currentMonth = state.getCurrentMonth(),
    currentYear = state.getCurrentYear();
  state.resetSelection();
  if (currentMonth === 1) {
    state.setCurrentMonth(12);
    state.setCurrentYear(currentYear-1);
    return;
  }
  state.setCurrentMonth(currentMonth-1);
  createCalendarBody();
};

const seeNextMonth = () => {
  const currentMonth = state.getCurrentMonth(),
    currentYear = state.getCurrentYear();
  state.resetSelection();
  if (currentMonth === 12) {
    state.setCurrentMonth(1);
    state.setCurrentYear(currentYear+1);
    return;
  }
  state.setCurrentMonth(currentMonth+1);
  createCalendarBody();
};

const selectDate = (selectedDate) => {
  const selectedDates = state.getSelectedDates();
  if (selectedDates.length >= 2){
    state.resetSelection();
    createCalendarBody();
    return;
  } else {
    selectedDates.push(selectedDate);
    state.setSelectedDates([...selectedDates]);
  }
  selectDateRange();
};

const selectDateRange = () => {
  const currentMonth = state.getCurrentMonth();
  const currentYear = state.getCurrentYear();
  const selectedDates = state.getSelectedDates();
  if (selectedDates.length === 2) {
    let toSort = [...selectedDates];
    toSort = toSort.sort((a, b) => a - b);
    let left = toSort[0];
    while (++left < toSort[1]) {
      if (![0,6].includes(getDayOfWeek(currentYear, currentMonth, left))) {
        toSort.push(left);
      }
    }
    toSort = toSort.sort((a, b) => a - b);
    state.setSelectedDateRange([...toSort]);
    createCalendarBody();
  }
};

const getCellDayClasses = (cellDay, cellDays, firstDayInRange, lastDayInRange) => {
  let colClasses = "o-flex-grid--item monthday-col";
  if (cellDays.includes(cellDay))
    colClasses = `${colClasses} selected-date`;
  if (cellDays.length && `${cellCh}${firstDayInRange}` === cellDay)
    colClasses = `${colClasses} f-selected-date`;
  if (cellDays.length && `${cellCh}${lastDayInRange}` === cellDay)
    colClasses = `${colClasses} l-selected-date`;
  return colClasses;
};

const cellCh = 'c';
  
const createCalendarBody = () => {
  const year = state.getCurrentYear(),
    month = state.getCurrentMonth(),
    selectedDateRange = state.getSelectedDateRange();
  const calendarMonthDays = document.getElementById("calendar-monthdays");
  const calendarCurrentDate = document.getElementById("calendar-current-date");
  calendarCurrentDate.innerText = formatYearMonth(year, month);
  calendarMonthDays.innerHTML= "";
  const firstDayInMonth = getStartOfMonth(year, month) || 0;
  const lastDayInMonth = getEndOfMonth(year, month) || 0;
  const body = document.createElement("div");
  const cellDays = selectedDateRange? selectedDateRange.map((day) => `${cellCh}${day}`) : [];
  const firstDayInRange = selectedDateRange? selectedDateRange[0] : 0;
  const lastDayInRange = selectedDateRange && selectedDateRange.length? selectedDateRange[selectedDateRange.length - 1] : 0;
  calendarMonthDays.appendChild(body);
  generateNumberSequence(6).forEach((week) => {
    const row = createFlexRow("monthdays-row", `r${week+1}`);
    body.appendChild(row);
    generateNumberSequence(7).forEach((iteration) => {
      const day = (week * 7) + iteration - firstDayInMonth + 1;
      const cellDay = `${cellCh}${day}`;
      const col = createFlexColumn("monthday-col", cellDay);
      if ((week === 0 && iteration < firstDayInMonth) || day > lastDayInMonth) {
        row.appendChild(col);
        return;
      }
      col.setAttribute("class", getCellDayClasses(cellDay, cellDays, firstDayInRange, lastDayInRange));
      col.setAttribute("onclick", `calendar.selectDate(${day})`);
      const innerCol = createDiv();
      col.appendChild(innerCol);
      const dayCell = createDiv();
      dayCell.setAttribute("class", "day-cell");
      dayCell.innerText = day;
      innerCol.appendChild(dayCell);
      row.appendChild(col);
    });
  });
};

window.calendar = {
  createCalendarBody,
  selectDate,
  seeNextMonth,
  seePrevMonth,
};
