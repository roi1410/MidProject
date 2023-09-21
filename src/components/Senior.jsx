const Senior = ({ img, sentences,color }) => {
  console.log(img, sentences);

  const head = sentences[0].split("-");
  console.log(sentences[0].split("-"));
  console.log(sentences[1].split(","));
  const text=sentences[1].split(",")
  return (
    <>
      <span className=" h-64 w-48 mx-24 mb-40 mt-10" >
        <img className="h-48 w-[100%]" src={img} alt="" />
        <p className="text-sm flex  w-[100%] flex-col  ">
          {head.map((e,i) => (
            <p key={i} className="self-center bg-blue-900 text-white  ">{e}</p>
          ))}
        </p>
        <span className="text-sm scale-20  w-[100%] overflow-wrap break-word ">
        {text.map((e) => (
            <p className= { `self-center  text-${color} `}>{e},</p>))}
        </span>
      </span>
    </>
  );
};

export default Senior;
