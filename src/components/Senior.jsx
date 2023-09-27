const Senior = ({ img, sentences, color }) => {

  const head = sentences[0].split("-");

  const text = sentences[1].split(",");
  return (
    <>
      <span className=" mx-24 mb-40 mt-10 h-64 w-48">
        <img className="h-48 w-[100%]" src={img} alt="" />
        <p className="flex w-[100%]  flex-col text-sm  ">
          {head.map((e, i) => (
            <span key={i} className="self-center bg-blue-900 text-white  ">
              {e}
            </span>
          ))}
        </p>
        <span className="scale-20 overflow-wrap  break-word w-[100%] text-sm ">
          {text.map((e,i) => (
            <p key={i} className={`self-center  text-${color} `}>{e},</p>
          ))}
        </span>
      </span>
    </>
  );
};

export default Senior;
