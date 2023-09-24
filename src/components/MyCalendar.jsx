import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useContext } from "react";
import { DegreeSingUpContext } from "../Context";
import { useState, useEffect } from "react";

function MyCalendar({ Users_Degree }) {
  const [DegreeObj, setDegreeObj] = useState([]);
  const DateAray = [
    {
      start: moment("2023-10-24T10:00:00").toDate(),
      end: moment("2023-12-01T10:00:00").toDate(),
    },
    {
      start: moment("2023-12-01T12:00:00").toDate(),
      end: moment("2024-01-01T10:00:00").toDate(),
    },
    {
      start: moment("2024-01-01T15:00:00").toDate(),
      end: moment("2024-03-01T10:00:00").toDate(),
    },
    {
      start: moment("2024-03-01T15:00:00").toDate(),
      end: moment("2024-04-01T10:00:00").toDate(),
    },
    {
      start: moment("2024-04-01T15:00:00").toDate(),
      end: moment("2024-07-01T10:00:00").toDate(),
    },
    
  ];

  const localizer = momentLocalizer(moment);
  Users_Degree?.map((element, index) => {
  


    let event = {
      start: DateAray[index].start,
      end: DateAray[index].end,
      title: element,
    };

    useEffect(() => {
      setDegreeObj((prev) => [...prev, event]);
    }, [event.title]);
},[]);
console.log(DegreeObj);

  return (
    <div>
      <Calendar
        events={DegreeObj}
        localizer={localizer}
        style={{ height: 500, backgroundColor: "white" }}
        startAccessor="start"
        endAccessor="end"
      />
     
    </div>
  );
}

export default MyCalendar;
