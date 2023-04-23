import useSort from "../hooks/useSort";
import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go";

import Table from "./Table";

function SortableTable(props) {
  const { config, data } = props;
  const { sortOrder, sortBy, sortedData, setSortColumn } = useSort(config, data);

  const getSortIndicatorIcons = (label, sortBy, sortOrder) => {
    if(label !== sortBy) {
      return <div><GoArrowSmallUp /><GoArrowSmallDown /></div>;
    }

    if (sortOrder === null) {
      return <div><GoArrowSmallUp /><GoArrowSmallDown /></div>;
    } else if (sortOrder === 'asc') {
      return <div><GoArrowSmallUp /></div>;
    } else if (sortOrder === 'desc') {
      return <div><GoArrowSmallDown /></div>;
    }
  }

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th onClick={() => setSortColumn(column.label)} className="cursor-pointer hover:bg-gray-100">
          <div className="flex items-center">
          {getSortIndicatorIcons(column.label, sortBy, sortOrder)}
          {column.label}
          </div>
        </th>
      ),
    };
  });

  return <Table {...props} config={updatedConfig} data={sortedData} />;
}

export default SortableTable;
