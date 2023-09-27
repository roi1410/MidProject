import { useParams } from "react-router-dom";
import Marketing from "../components/Marketing";
import DegreeHero from "../components/DegreeHero";
import OurSeniors from "../components/OurSeniors";


const DegreePage = () => {
  const routeParams = useParams();
  return (
    <div className="flex flex-col ">
      <DegreeHero  profession={routeParams.degree} />
      <Marketing  profession={routeParams.degree} />
      <OurSeniors  profession={routeParams.degree} />
    </div>
  );
};

export default DegreePage;
