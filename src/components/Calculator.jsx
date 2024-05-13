import styles from "../styles/Calculator.module.css";

const Calculator = () => {
  return (
    <div className={styles.calculator}>
      <form className={styles.form}>
        <div className={styles.inputs}>
          <div className={styles.group}>
            <label htmlFor="day" className={styles.label}>
              Day
            </label>
            <input
              id="day"
              name="day"
              type="number"
              className={styles.input}
              placeholder="DD"
            />
          </div>
          <div className={styles.group}>
            <label htmlFor="month" className={styles.label}>
              Month
            </label>
            <input
              id="month"
              name="month"
              type="number"
              className={styles.input}
              placeholder="MM"
            />
          </div>
          <div className={styles.group}>
            <label htmlFor="year" className={styles.label}>
              Year
            </label>
            <input
              id="year"
              name="year"
              type="number"
              className={styles.input}
              placeholder="YYYY"
            />
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
          <p className={styles.value}>- -</p>
          <p className={styles.text}>years</p>
        </div>
        <div className={styles.months}>
          <p className={styles.value}>- -</p>
          <p className={styles.text}>months</p>
        </div>
        <div className={styles.days}>
          <p className={styles.value}>- -</p>
          <p className={styles.text}>days</p>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
