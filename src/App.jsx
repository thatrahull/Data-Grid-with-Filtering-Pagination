import React, { useMemo } from "react";
import { useTable, useSortBy, usePagination, useGlobalFilter } from "react-table";

export default function DataGrid() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/comments");
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Body",
        accessor: "body",
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    setGlobalFilter,
    state: { globalFilter },
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  if (loading) return <div className="text-center text-xl p-10">Loading...</div>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="relative mb-6">
        <input
          className="p-3 pl-11 border border-gray-300 rounded-2xl w-full shadow focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition bg-white placeholder-gray-400 hover:bg-gray-50"
          placeholder="Search comments..."
          value={globalFilter || ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
        />
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
          🔍
        </span>
      </div>

      <table {...getTableProps()} className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden shadow">
        <thead className="bg-gray-800 text-white">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="p-3 text-left font-semibold cursor-pointer select-none hover:bg-gray-700"
                >
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="odd:bg-gray-100 even:bg-white hover:bg-indigo-50 transition">
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} className="p-3 border-b border-gray-300 text-gray-800">
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="flex justify-between mt-4">
        <button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          className="px-4 py-2 rounded bg-indigo-600 text-white disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-indigo-500"
        >
          Previous
        </button>
        <button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          className="px-4 py-2 rounded bg-indigo-600 text-white disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-indigo-500"
        >
          Next
        </button>
      </div>
    </div>
  );
}
