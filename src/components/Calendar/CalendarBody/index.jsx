import React, { Component } from "react";
import Week from "../Week";
import { parse, addWeeks, format, getWeekOfMonth, getMonth } from "date-fns";
import styles from './CalendarBody.module.css';

const WeekDays = () => {
  return (
    <tr className={styles.daysOfWeek}>
      <td>S</td>
      <td>M</td>
      <td>T</td>
      <td>W</td>
      <td>T</td>
      <td>F</td>
      <td>S</td>
    </tr>
  );
};

const CalendarBody = (props) => {
  const { currentDay } = props;


  const startOfMonth = getMonth(currentDay)+1;

  const WeeksArray = [];

  for (let i = 0; i < 5; i++) {
    WeeksArray.push(
      <Week
        key={`${i}-${currentDay}`}
        year={format(currentDay, "y")}
        week={format(addWeeks(parse(startOfMonth, 'M', new Date()), i, new Date()), 'w')}
      />
    );
  }

  return (
    <div className={styles.wrapper}>
      <div>
      <div className={styles.monthAndYear}>{format(currentDay, "MMMM y")}</div>
      </div>
      <table>
        <thead>
          <WeekDays />
        </thead>
        <tbody>
          {[WeeksArray]}
        </tbody>
      </table>
    </div>
  );
};

export default CalendarBody;
