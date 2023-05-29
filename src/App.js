import Banner from "./components/Banner";
import SearchForm from "./components/SearchForm";
import DataGrid from "./components/DataGrid";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div>
      <Banner />
      <SearchForm />
      <ToastContainer />
      <DataGrid />
    </div>
  );
};

export default App;
