import { useParams } from "react-router-dom";
import Marketing from "../components/Marketing";
import DegreeHero from "../components/DegreeHero";
import OurSeniors from "../components/OurSeniors";


const DegreePage = () => {
  const routeParams = useParams();
  return (
    <div className="flex flex-col">
      <DegreeHero className={``} profession={routeParams.degree} />
      <div className="grid grid-cols-2">
      <Marketing className={``} profession={routeParams.degree} />
      <OurSeniors className={``} profession={routeParams.degree} />
      </div>
    </div>
  );
};

export default DegreePage;
