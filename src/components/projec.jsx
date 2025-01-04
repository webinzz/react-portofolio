function projec(props) {
  return (
    <div
    data-aos="fade-up"
      className="col-span-1 hover:scale-110  h-72 rounded border-sky-300 border-2  relative p-3    text-slate-500 overflow-hidden flex justify-end"
    > 
    <div className="w-1/3 flex flex-col">
      <p data-aos="fade-right" className="text-3xl font-extrabold text-sky-300">{props.title}</p>
      <p data-aos="fade-right" className="text-xl ">{props.description}</p>
    </div>

      <img data-aos="zoom-in" src={props.img1} className="object-contain self-end   w-2/3 h-2/3 " alt="" />

      <div className="absolute left-0 bottom-0 w-full h-1/3 bg-gradient-to-b from-transparent blur-2xl to-sky-300 opacity-30"></div>

      {/* tect use */}
    
      {/* <div className="absolute top-0 right-0 p-2 flex  gap-2">
       
      </div> */}

      {/* hover */}
      {/* <div className="absolute z-20 h-full w-full top-0 left-0 bg-[rgba(241,245,249,.9)]">
      <div className=" text-slate-500">
        <h1 className="font-bold text-xl">{props.title}</h1>
        <h1 className="">{props.description}</h1>
      </div>
      </div> */}
    </div>
  );
}

export default projec;
