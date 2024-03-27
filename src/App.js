import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import { CustomerTable, CustomerProfile, CustomerForm } from './components'; // Import CustomerForm

export default function App() {
  return (
    <Suspense fallback={<BigSpinner />}>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<CustomerTable />} />
            <Route path="profile/:id" element={<CustomerProfile />} />
            <Route path="/add-customer" element={<CustomerForm />} />
          </Routes>
        </Router>
      </Provider>
    </Suspense>
  );
}

function BigSpinner() {
  return <h2>🌀 Loading...</h2>;
}
