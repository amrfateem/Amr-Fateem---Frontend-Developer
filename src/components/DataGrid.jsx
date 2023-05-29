import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const DataGrid = () => {
  // The objective of the DataGrid function is to display a table of data with pagination. It receives data from the Redux store and uses useState to manage the current page and items per page.
  const data = useSelector((state) => state.data);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data?.docs?.slice(indexOfFirstItem, indexOfLastItem);


  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="bg-white p-4 rounded shadow-md mt-2 container mx-auto">
      <h1 className="font-bold">Results</h1>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 font-bold text-sm uppercase border bg-gray-200">
                Serial
              </th>
              <th className="px-4 py-2 font-bold text-sm uppercase border bg-gray-200">
                Status
              </th>
              <th className="px-4 py-2 font-bold text-sm uppercase border bg-gray-200 hidden sm:table-cell">
                Type
              </th>
              <th className="px-4 py-2 font-bold text-sm uppercase border bg-gray-200 hidden sm:table-cell">
                Last Update
              </th>
              <th className="px-4 py-2 font-bold text-sm uppercase border bg-gray-200 hidden sm:table-cell">
                Reuse count
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems?.map((item) => (
              <tr key={item.serial} className="bg-white">
                <td className="px-4 py-2 border">{item.serial}</td>
                <td className="px-4 py-2 border">{item.status}</td>
                <td className="px-4 py-2 border hidden sm:table-cell">{item.type}</td>
                <td className="px-4 py-2 border hidden sm:table-cell">{item.last_update ? item.last_update : "N/A"}</td>
                <td className="px-4 py-2 border hidden sm:table-cell">{item.reuse_count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-center items-center">
        {data.totalDocs > itemsPerPage && (
          <ul className="pagination mt-4 flex justify-between items-center gap-2">
            {Array.from({ length: Math.ceil(data.totalDocs / itemsPerPage) }).map(
              (_, index) => (
                <li key={index}>
                  <button
                    onClick={() => paginate(index + 1)}
                    className={`px-3 py-2 rounded-md focus:outline-none ${
                      currentPage === index + 1
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {index + 1}
                  </button>
                </li>
              )
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DataGrid;
