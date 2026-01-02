"use client";
import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { calendarEvents } from "@/lib/data";
import { useState } from "react";

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };

  return (
    <div className="bg-white p-4 rounded-lg h-full">
      <Calendar
        localizer={localizer}
        events={calendarEvents}
        startAccessor="start"
        endAccessor="end"
        titleAccessor="title"
        views={["work_week", "day"]}
        view={view}
        style={{ height: "98%" }}
        onView={handleOnChangeView}
        min={new Date(2026, 0, 1, 6, 0, 0)}
        max={new Date(2026, 0, 1, 15, 15, 0)}
        formats={{
          timeGutterFormat: (date, culture, localizer) =>
            localizer ? localizer.format(date, "h:mm A", culture) : "",
          eventTimeRangeFormat: ({ start, end }, culture, localizer) =>
            localizer
              ? `${localizer.format(
                  start,
                  "h:mm A",
                  culture
                )} - ${localizer.format(end, "h:mm A", culture)}`
              : "",
        }}
      />
    </div>
  );
};

export default BigCalendar;