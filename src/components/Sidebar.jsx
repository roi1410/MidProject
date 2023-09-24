import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Sidebarcontext } from "../Context";

const Sidebar = () => {
  const { handleSubmit, register, error } = useForm();
  const { SetSideBarForm } = useContext(Sidebarcontext);
  const buttons=["business","computer","economy","accounting","law","media"]

  return (
    <>
      <div className=" flex-4 border-light-300 fixed top-6 z-10 ml-6  mt-12 h-full w-min gap-11 rounded-3xl  border-8 bg-gray-200 ">
        <h1 className="bold ml-3 text-2xl text-indigo-700">
          want to hear more
        </h1>

        <form
          className="flex flex-col gap-5 p-5 text-blue-400"
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
          <div className="grid grid-rows-3 grid-cols-2 gap-2 ">
            {buttons.map((e)=>(<button className="text-xs bg-slate-500 rounded-3xl">{e}</button>))}
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
