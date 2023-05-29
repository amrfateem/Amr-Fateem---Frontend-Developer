import { useState } from "react";
import { debounce } from "lodash";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { updateData } from "../redux/dataSlice";

const fetchData = async (query) => {
  const response = await fetch("https://api.spacexdata.com/v4/capsules/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(query),
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data;
};

const debouncedFetchData = debounce(async (query, dispatch) => {
  try {
    const data = await fetchData(query);
    if (data.totalDocs === 0) {
      toast.error("No results found", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      dispatch(updateData(data));
    }
  } catch (error) {
    console.error(error);
  }
}, 500);

const SearchForm = () => {
  const [status, setStatus] = useState("");
  const [serial, setSerial] = useState("");
  const [type, setType] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const query = {
        query: {},
        options: {
          pagination: false,
        },
      };
      if (status) {
        query.query.status = status;
      }
      if (serial) {
        query.query.serial = serial;
      }
      if (type) {
        query.query.type = type;
      }
      debouncedFetchData(query, dispatch);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow-md mt-2 container mx-auto">
      <h2 className="text-xl font-bold mb-4">Search</h2>
      <form className="grid grid-cols-1 justify-items-center md:grid-cols-3 gap-4">
        <div className="mb-4 w-full">
          <label
            htmlFor="status"
            className="block text-gray-700 text-sm mb-2 font-extrabold"
          >
            Status
          </label>
          <select
            id="statusFilter"
            className="appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline w-full"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">All</option>
            <option value="unknown">Unknown</option>
            <option value="active">Active</option>
            <option value="retired">Retired</option>
            <option value="destroyed">Destroyed</option>
          </select>
        </div>
        <div className="mb-4 w-full">
          <label
            className="block text-gray-700 text-sm mb-2 font-extrabold"
            htmlFor="serialFilter"
          >
            Serial
          </label>
          <input
            id="serialFilter"
            type="text"
            className="appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline w-full"
            placeholder="Enter serial"
            value={serial}
            onChange={(e) => setSerial(e.target.value)}
          />
        </div>
        <div className="mb-4 w-full">
          <label
            htmlFor="type"
            className="block text-gray-700 text-sm mb-2 font-extrabold"
          >
            Type
          </label>
          <select
            id="typeFilter"
            className="appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline w-full"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">All</option>
            <option value="Dragon 1.0">Dragon 1.0</option>
            <option value="Dragon 1.1">Dragon 1.1</option>
            <option value="Dragon 2.0">Dragon 2.0</option>
          </select>
        </div>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded w-full col-span-1 md:col-span-3"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
