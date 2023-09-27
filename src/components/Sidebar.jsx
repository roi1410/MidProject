import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Sidebarcontext } from "../Context";
import Sidebar_Btn from "./Sidebar-Btn";

const Sidebar = () => {
  const { handleSubmit, register, error } = useForm();
  const { SetSideBarForm } = useContext(Sidebarcontext);
  const [select_degree, Setselect_degree] = useState([]);
  let buttons = [
    "business",
    "computer",
    "economy",
    "accounting",
    "law",
    "media",
  ];
  const handleselect_degree = (degree, index) => {
    const isDegreeSelected = select_degree.some((item) => item.index === index);

    if (isDegreeSelected) {
      // If the degree is already selected, remove it from the array
      Setselect_degree((prev) => prev.filter((item) => item.index !== index));
    } else {
      // If the degree is not selected, add it to the array
      Setselect_degree((prev) => [...prev, { degree, index }]);
    }
  };
  const handlesidebarForm = (data) => {
    SetSideBarForm({ ...data, degree: select_degree });
  };
  const [closesidebar, setclosesidebar] = useState(" flex-4 border-light-300 fixed top-6 z-10 ml-6  mt-12  h-fit w-min gap-11  rounded-3xl border-8 bg-gray-200")
  const disabeleidebar=()=>{
    setclosesidebar(" flex-4 border-light-300 fixed top-6 z-10 ml-6  mt-12  h-fit w-min gap-11  rounded-3xl border-8 bg-gray-200 hidden")
  


  }

  return (
    <>
      <div className={closesidebar} >
        <span className="cursor-pointer" onClick={()=>disabeleidebar()}>x</span>
        <h1 className="bold ml-3 text-2xl text-indigo-700">
          want to hear more
        </h1>

        <form
          className="flex flex-col gap-5 p-5 text-blue-400"
          onSubmit={handleSubmit((data) => handlesidebarForm(data))}
        >
          <label>
            Name
            <input type="name" {...register("Name")} />
          </label>
          <label>
            phon number
            <input type="number" {...register("PhonNumber")} />
          </label>
          <label>
            mail
            <input type="mail" {...register("Mail")} />
          </label>
          <label>
            background
            <input type="text" {...register("Background")} />
          </label>
          <div className="grid grid-cols-2 grid-rows-3 gap-2 ">
            {buttons.map((e, index) => (
              <Sidebar_Btn
                 
                e={e}
                key={index}
                keyshit={index}
                handleselect_degree={handleselect_degree}
              />
            ))}
          </div>

          <button
            className="text-gary-200 rounded-xl border border-gray-300  bg-blue-300 py-3 text-center  font-semibold hover:bg-blue-700  hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            type="submit"
          >
            talk to me
          </button>
        </form>
      </div>
    </>
  );
};

export default Sidebar;
