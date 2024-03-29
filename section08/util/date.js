const getFormattedDate = (date) => {
  return new Date(date).toISOString().slice(0, 10);
};

const getDateMinusDays = (date, days) => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
};

export { getFormattedDate, getDateMinusDays };
