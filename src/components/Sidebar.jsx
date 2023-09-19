import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Sidebarcontext } from "../Context";

const Sidebar = () => {
  const { handleSubmit, register, error } = useForm();
  const { SetSideBarForm } = useContext(Sidebarcontext);

  return (
    <>
      <div className="sidebar__widget bg-gradient-to-r from-cyan-500 to-blue-500 z-10 fixed top-6 w-min h-fit flex-4 gap-11 border-light-300 border-8  rounded-3xl ml-10 mt-40 ">
        <h1 className="bg-gradient-to-r from-cyan-500 to-green-500 h-16">
          let us call back to you
        </h1>
        <form
          className="p-5 flex flex-col gap-5"
          onSubmit={handleSubmit((data) => SetSideBarForm(data))}
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
          <button className="bg-white border border-gray-300 rounded-md text-gray-700 font-semibold py-3  text-center hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" type="submit">submit</button>
        </form>
      </div>
    </>
  );
  
};

export default Sidebar;
