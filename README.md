# SpaceX Capsules Test Project

This is a test project for an assignment that focuses on exploring SpaceX's advanced rockets and spacecraft data. The project includes the following components:

## Components

### App
The `App` component is the main component that renders other components. It includes the `Banner`, `SearchForm`, `ToastContainer`, and `DataGrid` components.

### Banner
The `Banner` component displays a banner with a background gradient and provides information about SpaceX's capsules. It includes a title and a description.

### SearchForm
The `SearchForm` component is responsible for rendering a search form with input fields and filters. Users can enter search criteria such as status, serial, and type to retrieve specific results.

### DataGrid
The `DataGrid` component displays a table of data with pagination. It receives data from the Redux store and uses the `useState` hook to manage the current page and items per page. The component renders a table with columns for serial, status, type, last update, and reuse count. It also includes pagination controls to navigate through the data.

## Usage

To use this project, follow these steps:

1. Clone the repository.
2. Install the required dependencies by running `npm install` or `yarn install`.
3. Start the development server with `npm start` or `yarn start`.

## Dependencies

This project has the following dependencies:

- `react`: JavaScript library for building user interfaces.
- `react-dom`: Provides DOM-specific methods for React.
- `react-redux`: Official React bindings for Redux.
- `react-toastify`: Library for displaying toast notifications.
- `lodash`: JavaScript utility library for debouncing function calls.

Please ensure that you have these dependencies installed before running the project.

## API

The project uses the SpaceX API to fetch data. It sends a POST request to the following endpoint: `https://api.spacexdata.com/v4/capsules/query`. The request body includes the search query parameters such as status, serial, and type.

## Video


https://github.com/amrfateem/Amr-Fateem-Frontend-Developer/assets/35631863/e6de91aa-a6b4-4fb1-852b-78c703831daf


