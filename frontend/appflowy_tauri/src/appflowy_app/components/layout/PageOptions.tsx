export const PageOptions = () => {
  return (
    <div className={'flex items-center'}>
      <button className={'px-6 py-2 rounded-lg bg-sky-400 text-white'}>Share</button>
      <button className={'ml-8'}>
        <img className={'w-8 h-8'} src={`/images/editor/details.svg`} />
      </button>
    </div>
  );
};