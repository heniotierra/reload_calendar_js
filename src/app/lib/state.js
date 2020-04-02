const stateHolder = {
  state: {
    currentMonth: 0,
    currentYear: 0,
    selectedDates: [],
    selectedDateRange: [],
    scheduleAppointments: [],
  },
};

const setCurrentMonth = (currentMonth) => stateHolder.state = {
  ...stateHolder.state,
  ...{
    currentMonth,
  },
};

const setCurrentYear = (currentYear) => stateHolder.state = {
  ...stateHolder.state,
  ...{
    currentYear,
  },
};

const setSelectedDates = (selectedDates) => stateHolder.state = {
  ...stateHolder.state,
  ...{
    selectedDates: [
      ...selectedDates,
    ], 
  },
};

const setSelectedDateRange = (selectedDateRange) => stateHolder.state = {
  ...stateHolder.state, 
  ...{
    selectedDateRange: [
      ...selectedDateRange,
    ],
  },
};

const setScheduleAppointments = (scheduleAppointments) => stateHolder.state = {
  ...stateHolder.state,
  ...{
    scheduleAppointments: [
      ...scheduleAppointments,
    ], 
  },
};

const addScheduleAppointment = (scheduleAppointment) => stateHolder.state = {
  ...stateHolder.state,
  ...{
    scheduleAppointments: [
      ...stateHolder.state.scheduleAppointments,
      ...[scheduleAppointment],
    ],
  },
};

const getCurrentMonth = () => stateHolder.state.currentMonth;

const getCurrentYear = () => stateHolder.state.currentYear;

const getSelectedDates = () => stateHolder.state.selectedDates;

const getSelectedDateRange = () => stateHolder.state.selectedDateRange;

const getScheduleAppointments = () => stateHolder.state.scheduleAppointments;

const resetSelection = () => {
  setSelectedDates([]);
  setSelectedDateRange([]);
};

window.state = {
  setCurrentMonth,
  setCurrentYear,
  setSelectedDates,
  setSelectedDateRange,
  setScheduleAppointments,
  getCurrentMonth,
  getCurrentYear,
  getSelectedDates,
  getSelectedDateRange,
  getScheduleAppointments,
  addScheduleAppointment,
  resetSelection,
};
