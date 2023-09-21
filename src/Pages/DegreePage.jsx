import { useParams } from 'react-router-dom';
import Marketing from '../components/Marketing'
import  DegreeHero  from '../components/DegreeHero';
import OurSeniors from '../components/OurSeniors';

const DegreePage = () => {
    const routeParams = useParams();
  return (

    <div className='flex flex-col'>
    <DegreeHero classname={``} profession={routeParams.degree} />
    <Marketing classname={``} profession={routeParams.degree} />
    <OurSeniors classname={``} profession={routeParams.degree}/>
    </div>
  )
}

export default DegreePage