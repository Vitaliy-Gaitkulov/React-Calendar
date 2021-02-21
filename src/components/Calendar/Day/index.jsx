import React from "react";
import { format, parse } from "date-fns";
import styles from "./Day.module.css";

const Day = (props) => {
  const { day } = props;
  const curDay = new Date();
  return (
    <td className={format(day, "d") === format(curDay, "d") ? styles.curDay : styles.day}>
      {format(day, "d")}
    </td>
  );
};

export default Day;
