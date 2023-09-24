const Senior = ({ img, sentences, color }) => {
  console.log(img, sentences);

  const head = sentences[0].split("-");
  console.log(sentences[0].split("-"));
  console.log(sentences[1].split(","));
  const text = sentences[1].split(",");
  return (
    <>
      <span className=" mx-24 mb-40 mt-10 h-64 w-48">
        <img className="h-48 w-[100%]" src={img} alt="" />
        <p className="flex w-[100%]  flex-col text-sm  ">
          {head.map((e, i) => (
            <p key={i} className="self-center bg-blue-900 text-white  ">
              {e}
            </p>
          ))}
        </p>
        <span className="scale-20 overflow-wrap  break-word w-[100%] text-sm ">
          {text.map((e) => (
            <p className={`self-center  text-${color} `}>{e},</p>
          ))}
        </span>
      </span>
    </>
  );
};

export default Senior;
