import { Link } from "react-router-dom";
import Video from "../assets/Video.mp4";

const Hero = () => {
  return (
    <>
      <div className="hero_container relative flex h-screen flex-col items-center justify-center">
        <video
          autoPlay
          muted
          controls={false}
          loop
          className="absolute inset-0 z-0 h-full w-full object-cover"
          src={Video}
          alt="ops"
        />
        <div className="bold text-center text-8xl text-white opacity-70">
          ravivo universty
        </div>
        <div className="relative z-10 mt-10">
          <Link to="About">
            <button className="h-16 w-24 rounded-xl bg-blue-500 text-lg text-gray-200 opacity-80 hover:opacity-100 ">
              About us
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
