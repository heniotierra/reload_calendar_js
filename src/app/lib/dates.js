const { format, startOfMonth, endOfMonth, getDay, getDate } = require("date-fns");

const formatYearMonth = (Y, M) => format(new Date(Y, M, 1, 0, 0, 0, 0), "MMM yyyy");

const formatDate = (Y, M, D) => format(new Date(Y, M, D, 0, 0, 0, 0), "dd MMM yyyy");

const getStartOfMonth = (Y, M) => getDay(startOfMonth(new Date(Y, M, 1, 0, 0, 0, 0)));

const getEndOfMonth = (Y, M) => getDate(endOfMonth(new Date(Y, M, 1, 0, 0, 0, 0)));

const getDayOfWeek = (Y, M, D) => getDay(new Date(Y, M, D, 0, 0, 0, 0));

module.exports = {
  formatYearMonth,
  formatDate,
  getStartOfMonth,
  getEndOfMonth,
  getDayOfWeek,
};
