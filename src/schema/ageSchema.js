import * as Yup from "yup";

const now = new Date();
const currentDay = now.getDate();
const currentMonth = now.getMonth() + 1;
const currentYear = now.getFullYear();

const getDays = (year, month) => {
  return new Date(year, month, 0).getDate();
};

export const ageSchema = Yup.object().shape({
  day: Yup.number()
    .required("This field is required")
    .test("Must be a valid day", "Must be a valid day", (day, context) => {
      const { month, year } = context.parent;
      if (day >= 1 && day <= 31) {
        if (!month || !year) {
          return true;
        } else {
          const daysInMonth = getDays(year, month);
          if (year === currentYear && month === currentMonth) {
            return day <= currentDay;
          } else {
            return day <= daysInMonth;
          }
        }
      } else {
        return false;
      }
    }),
  month: Yup.number()
    .required("This field is required")
    .test(
      "Must be a valid month",
      "Must be a valid month",
      (month, context) => {
        const { year } = context.parent;
        if (month >= 1 && month <= 12) {
          if (!year) {
            return true;
          } else {
            if (year === currentYear) {
              return month <= currentMonth;
            } else {
              return true;
            }
          }
        } else {
          return false;
        }
      }
    ),
  year: Yup.number()
    .required("This field is required")
    .test(
      "Must be in the past",
      "Must be in the past",
      (year) => year <= currentYear
    ),
});
