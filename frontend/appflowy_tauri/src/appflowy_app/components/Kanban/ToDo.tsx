import { ColumnHeader } from "../_shared/ColumnHeader";
import { ColumnFooter } from "../_shared/ColumnFooter";

export const ToDo = () => {
  return (
    <div>
      <ColumnHeader
        heading='To Do'
        countNumber='2'
      />
      <ColumnFooter />
    </div>
  );
};
