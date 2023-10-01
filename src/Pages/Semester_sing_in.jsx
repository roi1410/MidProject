import { NavLink, useNavigate } from "react-router-dom";
import { SingUp_degreeContext } from "../Context";
import { useContext, useEffect } from "react";
import { Calendar } from "lucide-react";
import MyCalendar from "../components/MyCalendar";

export const Semester_sing_in = () => {
  const { CerentUser ,DegreeDate} = useContext(SingUp_degreeContext);

 
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
  

    return (
      <>
        <div className="flex flex-col">
          <div className=" bg-blue-500">
            <NavLink
              className={
                "text-lg font-bold text-white transition-colors duration-300 hover:text-blue-900"
              }
              to={"/PayMent_rell"}
            >
              payment
            </NavLink>
          </div>
          
          <MyCalendar Users_Degree={Users_Degree} DegreeDate={DegreeDate} />
        </div>
      </>
    );
  }
};
