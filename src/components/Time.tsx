import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons'; 
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { dayjs } from 'lib/dayjs';

const now = () => dayjs().tz();

const events = {
  christmas: [25, 12],
  newYear: [1, 1],
  birthday: [18, 8],
};

const format = 'hhA';
const beforeTime = dayjs('12AM', format).tz();
const afterTime = dayjs('8AM', format).tz();

const Time = () => {
  const [date, setDate] = useState(now());

  const currentEvent = Object.entries(events)
    .find(([_, [day, month]]) => day === date.date() && month === date.month() + 1)
    ?.[0];

  useEffect(() => {
    const timer = setInterval(() => setDate(now()), 1000);
    return () => clearInterval(timer);
  }, []);

  const icon = date.isBetween(beforeTime, afterTime) ? faMoon : faClock; 

  return (
    <p>
      <FontAwesomeIcon className="mr-2" icon={icon} />
      {date.format('Do MMMM YYYY • h:mm:ss A')}{' '}
      {currentEvent && (
        <span className="font-bold">
          —{' '}
          {{
            christmas: 'Merry Christmas!',
            newYear: 'Happy New Year!',
            birthday: 'Happy Birthday to me! 🎉',
          }[currentEvent]}
        </span>
      )}
    </p>
  );
};

export default Time;
