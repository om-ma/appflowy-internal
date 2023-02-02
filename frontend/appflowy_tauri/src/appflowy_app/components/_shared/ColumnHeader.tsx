export const ColumnHeader = (props: any) => {
  return (
    <div className={"flex justify-between"}>
      <div className={"flex gap-x-3.5 items-center"}>
        <span className={"h-2.5 w-2.5 bg-tint-3 rounded-full outline outline-offset-1 outline-white"}></span>
        <div className={"flex items-center text-xs"}>
          <h3 className={"font-medium"}>{props.heading}</h3><span className={"text-shade-4 ml-1"}>({props.countNumber})</span>
        </div>
      </div>
      <div className={"flex gap-x-3.5 items-center"}>
        <img className={'w-4 cursor-pointer'} src={'/images/grid/details.svg'} alt={'details'} />
        <img className={'w-4 cursor-pointer'} src={'/images/home/add.svg'} alt={'add'} />
      </div>
    </div>
  );
};
