import React, { Component } from 'react';
import {addDays, addWeeks, addYears, format, getWeeksInMonth} from 'date-fns';
import CurrentDay from './CurrentDay';
import CalendarBody from './CalendarBody';
import styles from './Calendar.module.css';

class Calendar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentDay: new Date()
    };
  }

  render () {
    const {currentDay} = this.state;
    return (
      <div className={styles.container}>
        <CurrentDay currentDay={currentDay} />
        <CalendarBody currentDay={currentDay}/>
      </div>
    );
  }
}

export default Calendar;
