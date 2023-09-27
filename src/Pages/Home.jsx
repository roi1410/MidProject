import { useContext } from "react";
import Glary from "../components/Glary";
import Hero from "../components/Hero";
import Marketing from "../components/Marketing";
import Seniors from "../components/Seniors";
import { GraduateContext } from "../Context";

const Home = () => {
  const { GraduateData } = useContext(GraduateContext);
  
  return (
    <div className="flex flex-col">
    
        <Hero className="w-full" />
        <Seniors className="w-full" data={GraduateData[1]}/>
        <Marketing className profession={"home"} />
        <Seniors className="w-full" data={GraduateData[0]}/>
        <Glary className="w-full" />
    </div>
  );
};

export default Home;
