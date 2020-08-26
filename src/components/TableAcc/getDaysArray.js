

export const getDaysArray = (year, month) => {
  const names = Object.freeze(
    ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']);
  const date = new Date(year, month - 1, 1);
  const result = [];
  while (date.getMonth() === month - 1) {
    result.push(`${date.getDate()}-${names[date.getDay()]}`);
    date.setDate(date.getDate() + 1);
  }
  return result;
}