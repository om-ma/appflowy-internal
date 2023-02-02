import { TopNavigation } from '../components/Kanban/TopNavigation';
import { ToDo } from '../components/Kanban/ToDo';
import { InProgress } from '../components/Kanban/InProgress';
import { Complete } from '../components/Kanban/Complete';
import { NewBlock } from '../components/Kanban/NewBlock';

export const Kanban = () => {
  return (
    <div className={'pl-20 pt-12 pb-9 pr-16'}>
      <h3 className={"font-semibold text-3xl text-charcoal mb-8"}>Board</h3>
      <TopNavigation />
      <div className={'flex flex-nowrap gap-x-2 overflow-x-auto mt-8'}>
        <div className={'w-[264px] bg-surface-1 px-3 py-3.5 rounded-md'}>
          <ToDo />
        </div>
        <div className="w-[264px] bg-surface-1 px-3 py-3.5 rounded-md">
          <InProgress />
        </div>
        <div className="w-[264px] bg-surface-1 px-3 py-3.5 rounded-md">
          <Complete />
        </div>
        <div className="w-[264px] px-3 py-3.5 rounded-md">
          <NewBlock />
        </div>
      </div>
    </div>
  );
};
