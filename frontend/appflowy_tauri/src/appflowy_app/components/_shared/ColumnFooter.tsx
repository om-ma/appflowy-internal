export const ColumnFooter = () => {
  return (
    <div className={'flex cursor-pointer'}>
      <img className={'w-4 mr-2'} src={'/images/home/add.svg'} alt={'add'} />
      <h3 className={"font-medium text-xs text-charcoal"}>New</h3>
    </div>
  );
};
