import { useState } from "react";
import styles from "../styles/Calculator.module.css";
import { useFormik } from "formik";
import { ageSchema } from "../schema/ageSchema";
import { getCurrentDate, getDays } from "../utils/date";

const Calculator = () => {
  const [result, setResult] = useState({
    years: "- -",
    months: "- -",
    days: "- -",
  });
  const handleSubmit = (values) => {
    const { day, month, year } = values;
    const { currentDay, currentMonth, currentYear } = getCurrentDate();
    const daysInMonth = getDays(year, month);
    const remainingDays =
      currentDay >= day ? currentDay - day : daysInMonth - day + currentDay;
    const remainingMonths =
      currentMonth >= month
        ? currentDay >= day
          ? currentMonth - month
          : currentMonth - month - 1
        : 12 - month + currentMonth - 1;
    const remainingYears =
      currentMonth >= month ? currentYear - year : currentYear - year - 1;
    setResult({
      years: remainingYears,
      months: remainingMonths,
      days: remainingDays,
    });
  };
  const formik = useFormik({
    initialValues: {
      day: "",
      month: "",
      year: "",
    },
    validationSchema: ageSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className={styles.calculator}>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <div className={styles.inputs}>
          <div
            className={`${styles.group} ${
              formik.touched.day && formik.errors.day && styles.error
            }`}
          >
            <label htmlFor="day" className={styles.label}>
              Day
            </label>
            <input
              id="day"
              name="day"
              type="number"
              className={styles.input}
              placeholder="DD"
              value={formik.values.day}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <p className={styles.message}>{formik.errors.day}</p>
          </div>
          <div
            className={`${styles.group} ${
              formik.touched.month && formik.errors.month && styles.error
            }`}
          >
            <label htmlFor="month" className={styles.label}>
              Month
            </label>
            <input
              id="month"
              name="month"
              type="number"
              className={styles.input}
              placeholder="MM"
              value={formik.values.month}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <p className={styles.message}>{formik.errors.month}</p>
          </div>
          <div
            className={`${styles.group} ${
              formik.touched.year && formik.errors.year && styles.error
            }`}
          >
            <label htmlFor="year" className={styles.label}>
              Year
            </label>
            <input
              id="year"
              name="year"
              type="number"
              className={styles.input}
              placeholder="YYYY"
              value={formik.values.year}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <p className={styles.message}>{formik.errors.year}</p>
          </div>
        </div>
        <div className={styles.seperator}>
          <hr className={styles.line} />
          <button type="submit" className={styles.button}>
            <img
              src="/icon-arrow.svg"
              alt="Click to calculate age"
              className={styles["button-icon"]}
            />
          </button>
        </div>
      </form>
      <div className={styles.result}>
        <div className={styles.years}>
          <p className={styles.value}>{result.years}</p>
          <p className={styles.text}>years</p>
        </div>
        <div className={styles.months}>
          <p className={styles.value}>{result.months}</p>
          <p className={styles.text}>months</p>
        </div>
        <div className={styles.days}>
          <p className={styles.value}>{result.days}</p>
          <p className={styles.text}>days</p>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
