import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './styles.css';

const CustomersTable = () => {
  const users = useSelector((state) => state.users.users);

  return (
    <div className="customers-table-container">
      <h1>Customers</h1>
      <div className="add-customer-button-container">
        <Link to="/add-customer" className="add-customer-button">
          Add Customer
        </Link>
      </div>
      <div className="section">
        <h2>List of Customers</h2>
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>PlanStatus</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.planStatus}</td>
                <td>
                  <Link to={`/profile/${user.id}`} className="profile-button">
                    View Profile
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomersTable;
