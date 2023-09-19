// import { FaSuitcase } from "../../node_modules/@react-icons/all-files/fa/";
import { FaSuitcase } from 'react-icons/fa';

const Marketing = (marketing) => {
  return (
    <div className="bg-grey-200 h-96 flex justify-center flex-col items-center">
      <span className='text-blue-500 text-xl'>מכשירים את דור העתיד של המנהיגות והמנהיגים בישראל{}</span>
      <span className='text-blue-400 text-l'>תוכניות לימוד לבחירה:{}</span>
      <span className='text-blue-400 text-l'>ממשל | משפטים וממשל | קיימות וממשל | מסלול מצטיינים באסטרטגיה וקבלת החלטות{}</span>
      <span className='text-orange-400 text-2xl'>דברים שכדאי לדעת{}</span>
      <ul className="flex flex-row justify-around">
        <li
          className="flex flex-col items-center justify-center text-center
        w-64 h-64 rounded-full border-2 border-blue-500 bg-transparent mx-10"
        >
          <span>
          <FaSuitcase className="text-orange-400 text-2xl" />
          </span>
          <header className="text-blue-500 mb-3 ">
            התמחות מעשית בזמן התואר
          </header>
          <p className="fill-current">
            כנסת ישראל, משרדי הממשלה, ייעוץ אסטרטגי, גופים בתחום הסייבר, עמותות
            חברתיות
          </p>
        </li>
        <li
          className="flex flex-col items-center justify-center text-center
        w-64 h-64 rounded-full border-2 border-blue-500 bg-transparent mx-10"
        >
          <span>
          <FaSuitcase className="text-orange-400 text-2xl" />
          </span>
          <header className="text-blue-500 mb-3 ">
            התמחות מעשית בזמן התואר
          </header>
          <p className="fill-current">
            כנסת ישראל, משרדי הממשלה, ייעוץ אסטרטגי, גופים בתחום הסייבר, עמותות
            חברתיות
          </p>
        </li>
        <li
          className="flex flex-col items-center justify-center text-center
        w-64 h-64 rounded-full border-2 border-blue-500 bg-transparent mx-10"
        >
          <span>
          <FaSuitcase className="text-orange-400 text-2xl" />
          </span>
          <header className="text-blue-500 mb-3 ">
            התמחות מעשית בזמן התואר
          </header>
          <p className="fill-current">
            כנסת ישראל, משרדי הממשלה, ייעוץ אסטרטגי, גופים בתחום הסייבר, עמותות
            חברתיות
          </p>
        </li>
        
      </ul>
    </div>
  );
};

export default Marketing;
