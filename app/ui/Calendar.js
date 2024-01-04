'use client'

import React, { useEffect, useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import ukLocale from '@fullcalendar/core/locales/uk';

const Calendar = ({ events }) => {
  const calendarRef = useRef(null);

  useEffect(() => {
    const calendar = calendarRef.current.getApi();
    calendar.addEventSource(events);
  }, [events]);

  return (
    <FullCalendar
      locale={ukLocale}
      height={782}
      ref={calendarRef}
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={events}
    />
  );
};

export default Calendar;
