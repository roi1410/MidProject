import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { DegreeSingUpContext } from "../Context";

const MyCalendar = ({ Users_Degree, DegreeDate }) => {
  const localizer = momentLocalizer(moment);

  
  const formatEvents = () => {
    const formattedEvents = Users_Degree.map((degree) => {
      const eventData = DegreeDate[degree];
      return {
        title: degree,
        start: new Date(eventData?.start), 
        end: new Date(eventData?.end),     
        color: eventData?.color,           
      };
    });
    return formattedEvents;
  };
  const degree_info=formatEvents()
  console.log(degree_info);
 

  


  
  const eventStyleGetter = (event) => {
    const style = {
      backgroundColor: event.color || 'blue', 
      borderRadius: "0px",
      opacity: 0.8,
      color: "white",
      border: "0px",
      display: "block",
      textAlign: "center",
    };

    return {
      style: style,
    };
  };

  return (
    
    <div className="border-8 border-sky-500">
      <div>

      {degree_info.map((degree)=>{
        return(
          <div className="  border-8 border-sky-500 grid gap-2">
        
        
        <span className="font-sans font-bold">{degree?.title + " "}</span>
        <span> start in: {moment(degree.start).format("MMMM D, YYYY h:mm a")}</span>
        <span> end in :{moment(degree.end).format("MMMM D, YYYY h:mm a")}</span>
        
        
        </div>
        )
      })}

      </div>
      
     
      <Calendar
        events={degree_info}
        localizer={localizer}
        style={{ height: 700, backgroundColor: "white" }}
        startAccessor="start"
        endAccessor="end"
        components={{
    
          event: CustomEvent,
        }}
        eventPropGetter={eventStyleGetter} 
      />
    </div>
  );
};


const CustomEvent = ({ event }) => {
  return (
    <div>
      <strong>{event.title}</strong>
      <br />
      <span>{moment(event.start).format("MMMM D, YYYY h:mm a")} - {moment(event.end).format("h:mm a")}</span>
    </div>
  );
};

export default MyCalendar;
