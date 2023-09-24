import { NavLink, useNavigate } from "react-router-dom";
import { SingUp_degreeContext } from "../Context";
import { useContext, useEffect } from "react";
import { Calendar } from "lucide-react";
import MyCalendar from "../components/MyCalendar";

export const Semester_sing_in = () => {
  const { CerentUser } = useContext(SingUp_degreeContext);
  const nav = useNavigate();
  if (!CerentUser) {
    return (
      <>
        {useEffect(() => {
          nav("/LogIn");
        })}
      </>
    );
  } else {
    const Users_Degree = CerentUser.Degree;
    const test = () => {
      console.log( CerentUser);
    };
 
    return (
      <>
      <button onClick={() => test()}>test btn</button>
      
        <h1>choose the summester you want in </h1>
        <NavLink to={"/PayMent_rell"}>payment</NavLink>

        <MyCalendar Users_Degree={Users_Degree} />
      </>
    );
  }
};
