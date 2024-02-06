const getFormattedDate = (date) => {
  console.log(">>>>>date", date);

  return date.toString().slice(0, 10);
};

const getDateMinusDays = (date, days) => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
};

export { getFormattedDate, getDateMinusDays };
