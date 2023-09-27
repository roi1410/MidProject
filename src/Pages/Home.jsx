import Glary from "../components/Glary";
import Hero from "../components/Hero";
import Marketing from "../components/Marketing";
import Seniors from "../components/Seniors";
import { Register } from "./Register";
import Sidebar from "../components/Sidebar"; // Import the Sidebar component

const Home = () => {
  return (
    <div className="flex">
   
  

      {/* Main content */}
      <div className="flex-1">
        <Hero />
        <Marketing profession={"home"} />
        <Glary />
        <Seniors />
      </div>
    </div>
  );
};

export default Home;
