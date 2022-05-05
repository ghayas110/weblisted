import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function CalendarGfg() {
	const [value, onChange] = useState(new Date());

	return (
		<div>
			<h1>NextJs Calendar - GeeksforGeeks</h1>
			<Calendar className={Calendar.react-calendar__month-view__weekdays__weekday}
				onChange={onChange}
				value={value}
			/>
		</div>
	);
}
