export const getCurrentDate = () => {
  const now = new Date();
  const currentDay = now.getDate();
  const currentMonth = now.getMonth() + 1;
  const currentYear = now.getFullYear();
  return { currentDay, currentMonth, currentYear };
};

export const getDays = (year, month) => {
  return new Date(year, month, 0).getDate();
};
