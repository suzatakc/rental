import { usePagination, useSortBy, useTable } from "react-table";
import "./UserTable.scss";

export const UserTable = () => {
  const columns = "";
  const data = "";
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    selectedFlatRows,
    setPageNumber,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable({
    columns,
    data,
    initialState: { pageIndex: 0 },
    useSortBy,
    usePagination,
  });

  return (
    <div className="user-data-table">
      <table {...getTableProps()} className="table table-hover">
        <thead className="tablehead">
          {/* {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))} */}
          <th>name</th>
          <th>email</th>
          <th>bike</th>
          <th>fare</th>
          <th>pickup</th>
          <th>dropof</th>
          <th>travel</th>
          <th>citizen</th>
          <th>liscense</th>
          <th>contact</th>
          <th>dropdate</th>
          <th>Action</th>
        </thead>
        <tbody {...getTableBodyProps()} className="table-body-content">
          {/* {page.map((row) => {
            prepareRow(row);
            return (
              <tr className="tablerow" {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })} */}
          <tr>
            <td>add</td>
          </tr>
          <tr>
            <td>add</td>
          </tr>{" "}
          <tr>
            <td>add</td>
          </tr>{" "}
          <tr>
            <td>add</td>
          </tr>{" "}
          <tr>
            <td>add</td>
          </tr>{" "}
          <tr>
            <td>add</td>
          </tr>{" "}
          <tr>
            <td>add</td>
          </tr>{" "}
          <tr>
            <td>add</td>
          </tr>{" "}
          <tr>
            <td>add</td>
          </tr>
          <tr>
            <td>add</td>
          </tr>{" "}
          <tr>
            <td>add</td>
          </tr>
          <tr>
            <td>add</td>
            <td>add</td>
            <td>add</td>
          </tr>
        </tbody>
      </table>
      <div className="block-gap">
        <div className="data-table">
          <div className="entries">
            <span className="content accent-2-charcoal-50">Showing </span>
            <span className="show-drop">
              <select
                className="select-tag"
                value={pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                }}
              >
                {[10, 15, 20].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    {pageSize}
                  </option>
                ))}
              </select>
            </span>
            <span className="content accent-2-charcoal-50">entries</span>
          </div>
          <div className="data-buttons">
            <button
              className={`${pageIndex === 0 ? "remove-space-rt" : "prev"}`}
              theme="light-secondary"
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              Prev
            </button>
            {pageIndex === 0 ? (
              ""
            ) : (
              <>
                <button
                  onClick={() => {
                    const page = pageIndex ? Number(pageIndex) - 1 : 0;
                    gotoPage(page);
                  }}
                  className=""
                >
                  {pageIndex}
                </button>
              </>
            )}
            <button theme="light-secondary" className="button-space active">
              {pageIndex + 1}
            </button>
            {pageIndex + 1 < pageCount ? (
              <button
                onClick={() => {
                  const page = Number(pageIndex) + 1;
                  gotoPage(page);
                }}
                className=""
              >
                {pageIndex + 2}
              </button>
            ) : (
              ""
            )}
            <button
              className={`${
                pageIndex === pageCount - 1 ? "remove-space-rt" : "next"
              }`}
              onClick={() => nextPage()}
              disabled={!canNextPage}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
