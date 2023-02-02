export const Search = () => {
  return (
    <div className={'max-w-md mx-auto'}>
      <div className={'relative flex items-center w-full h-10 p-2 rounded-lg focus-within:shadow-lg bg-white overflow-hidden'}>
        <div className={'flex items-center text-charcoal'}>
          <img className={'w-4 mr-2'} src={'/images/editor/search.svg'} alt={'search'} />
        </div>
        <input
          className={'text-xs text-charcoal'}
          type="text"
          id="search"
          placeholder="Search" 
        /> 
      </div>
    </div>
  );
};
