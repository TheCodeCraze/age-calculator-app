import * as Yup from "yup";
import { getCurrentDate, getDays } from "../utils/date";

const { currentDay, currentMonth, currentYear } = getCurrentDate();

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
    )
    .test("Must be a valid year", "Must be a valid year", (year) => year >= 1),
});
