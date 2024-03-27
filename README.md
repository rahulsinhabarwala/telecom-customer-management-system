## Project Structure

The project follows a standard React file organization with a few custom additions:

- `src/components/`: This folder contains all the React components used in the application, organized into subfolders for modularity and clarity.
  - `CustomerForm/`: Includes the `CustomerForm` component for adding new customers, `CustomerFormFields.js` for form field definitions, and `styles.css` for component-specific styling.
  - `CustomerProfile/`: Contains the `CustomerProfile` component that allows viewing individual customer details and associated styles.
  - `CustomerTable/`: 
    - Contains the `CustomersTable` component, which displays the list of customers in a table format.
    - `__tests__/`: Inside the `CustomerTable` folder, this subfolder contains tests for the `CustomersTable` component, verifying that it functions and renders as expected.
    - `styles.css`: Specific styles for the `CustomersTable` component.
  - `PlanSelectionForm/`: Consists of the `PlanSelectionForm` used within the customer form to select a plan.
- `src/data/`: Houses mock data or constants that mimic server responses or configuration data.
- `src/reducers/`: Includes Redux reducers like `usersSlice` for user management and `plansSlice` for plan-related state.
- `src/store/`: Contains the setup and configuration of the Redux store.
- `src/utils/`: A place for utility functions shared across the application.
- `src/App.js`: The central component housing the main layout and routing logic.
- `src/index.js`: The React application's entry point, rendering the `App` component.
- `src/styles.css`: Global styles that apply to the entire application.
- `src/logo.svg`: A React logo, which is part of the initial Create React App setup.

## Testing

Tests are written using React Testing Library and Jest to ensure components behave as expected. Tests for each component reside in a `__tests__` subfolder within the component's directory or alongside the component file. To run the tests:

### `npm test`

Launches the test runner in interactive watch mode. Tests are picked up by Jest based on their file names:

- Files with `.test.js` or `.spec.js` extensions
- Files inside `__tests__` folders

Test cases cover rendering components, interaction simulations, and verifying the presence of essential elements and correct data rendering.

## Available Scripts

(Include the details for `npm start`, `npm run build`, `npm run eject`, and any other scripts that your package.json contains.)

## Deployment

This section has information about deploying your application. [Deployment](https://facebook.github.io/create-react-app/docs/deployment)

## Learn More

For more information on React and Create React App:

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React documentation](https://reactjs.org/)
