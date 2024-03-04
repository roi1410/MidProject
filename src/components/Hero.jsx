import { Link } from "react-router-dom";
import Video from "../assets/video.mp4";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <div className="m-0 w-full hero_container relative flex h-screen flex-col items-center justify-center p-0">
        <video
          autoPlay
          muted
          controls={false}
          loop
          className="absolute inset-0 z-0 m-0 h-full w-full object-cover p-0"
          src={Video}
          alt="ops"
        />
       <div className="font-bold text-center sm:text-8xl  text-white opacity-70">
          <div className="text-3xl sm:text-8xl">ravivo university</div>
        </div>
        <div className="relative z-10 mt-10">
          <Link to="About">
            <motion.button
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
              className="h-16 w-24 rounded-xl bg-blue-500 text-lg text-gray-200 opacity-80 hover:opacity-100"
            >
              About us
            </motion.button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
