import { Search } from '../_shared/Search';
import { useState } from "react";
import Select from 'react-select';

export const TopNavigation = () => {
  const data = [
    {
      value: 1,
      text: 'Group by',
      icon: <img className={'w-4 mr-2'} src={'/images/editor/group.svg'} alt={'group by'} />
    },
    {
      value: 2,
      text: 'Person',
      icon: <img className={'w-4 mr-2'} src={'/images/home/person.svg'} alt={'person'} />
    },
    {
      value: 3,
      text: 'Due date',
      icon: <img className={'w-4 mr-2'} src={'/images/grid/clock.svg'} alt={'clock'} />
    },
    {
      value: 4,
      text: 'Status',
      icon: <img className={'w-4 mr-2'} src={'/images/editor/status.svg'} alt={'status'} />
    }
  ];

  const [selectedOption, setSelectedOption] = useState(null);
  // handle onChange event of the dropdown
  const handleChange = (e: any) => {
    setSelectedOption(e);
  }


  return (
    <div className={'flex justify-between items-center flex-wrap'}>
      <div className={'flex items-center'}>
        <h2 className={'font-semibold text-base mb-0 text-charcoal'}>My plans on week</h2>
        <button className={'p-2 mr-2'}>
          <img className={'w-4'} src={'/images/home/settings.svg'} alt={'settings'} />
        </button>
      </div>
      <div className={'flex items-center justify-end gap-x-8'}>
        <div className={'flex items-center cursor-pointer'}>
          <img className={'w-4 mr-2'} src={'/images/editor/grid.svg'} alt={'grid'} />
          <p className={'mr-2 text-xs text-charcoal'}>Grid</p>
        </div>
        <div className={'flex items-center cursor-pointer'}>
          <img className={'w-4 mr-2'} src={'/images/editor/board.svg'} alt={'board'} />
          <p className={'mr-2 text-xs text-charcoal'}>Board</p>
        </div>
        <Select
          placeholder={
            <div className={'flex items-center text-xs text-charcoal'}>
              <img className={'w-4 mr-2'} src={'/images/editor/group.svg'} alt={'group by'} />
              Group by
            </div>
          }
          value={selectedOption}
          options={data}
          onChange={handleChange}
          getOptionLabel={(e: any) => (
            <div className={'flex items-center'}>
              {e.icon}
              <span className={'text-xs text-charcoal'}>{e.text}</span>
            </div>
          )}
          styles={{
            indicatorSeparator: () => {}, // removes the "stick"
            dropdownIndicator: defaultStyles => ({
              ...defaultStyles,
              '& svg': { display: 'none' },
            }),
            control: base => ({
              ...base,
              border: 0,
              boxShadow: 'none',
              cursor: 'pointer',
            })
          }}
        />
        <Search />
      </div>
    </div>
  );
};
