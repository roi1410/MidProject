import React from "react";
import { useState } from "react";

const Sidebar_Btn = ({ handleselect_degree, keyshit, e }) => {
    const [color, setcolor] = useState(false)
   

  const sting = `rounded-3xl ${color ? 'bg-blue-500' : 'bg-red-500'} text-xs`

  return (
    <button
      type="button"
      onClick={() => {handleselect_degree(e, keyshit); setcolor(!color)}}
      className={sting}
    >
      {e}
    </button>
  );
};
export default Sidebar_Btn;
