
function skill(props) {
  return (
    <div className="col-span-1 mb-8 flex-col flex items-center ">
    <div className="h-20 w-20 bg-[#f7f7f7] rounded-full border border-sky-300"></div>
    <h1 className="font-bold">{props.title}</h1>
    <h1 className="">{props.status}</h1>
</div>
  )
}

export default skill
