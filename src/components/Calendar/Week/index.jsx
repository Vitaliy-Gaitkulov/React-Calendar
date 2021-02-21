import React from 'react';
import {parse, addDays} from 'date-fns';
import Day from '../Day';

const Week = props => {
  const {year, week} = props;

  const startOfWeek = parse(`${year} ${week}`, 'Y w', new Date());
  console.log(startOfWeek);

  const dayArray = [];
  for (let i = 0; i < 7; i++) {
    dayArray.push(
      <Day key={`${i}-${year}-${week}`} day={addDays(startOfWeek, i)} />
    );
  }
  
  return (
    <tr>
      {[dayArray]}
    </tr>
  );
}

export default Week;
