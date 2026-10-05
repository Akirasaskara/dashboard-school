type Column = {
  header: string;
  accessor: string;
  className?: string;
};

type TableProps<Row> = {
  columns: Column[];
  renderRow: (item: Row) => React.ReactNode;
  data: Row[];
};

const Table = <Row,>({ columns, renderRow, data }: TableProps<Row>) => {
  return (
    <div className="mt-4 overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="text-left text-sm text-gray-500">
            {columns.map((column) => (
              <th scope="col" key={column.accessor} className={column.className}>
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{data.map((item) => renderRow(item))}</tbody>
      </table>
    </div>
  );
};

export default Table;
