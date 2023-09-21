import { FaSuitcase } from "react-icons/fa";

const Circle = ({color,circle}) => {
  return (
    <div
    className="flex flex-col items-center justify-center text-center
  w-64 h-64 rounded-full border-2 border-blue-500 bg-transparent mx-10"
  >
    <span>
      <FaSuitcase className={`text-${color} text-2xl`} />
    </span>
    <header className={`text-${color}`}>{circle.slogans[0]}</header>
    <p className="fill-current">{circle.slogans[1]}</p>
  </div>
  )
}

export default Circle