import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { renewPlan } from '../../reducers/usersSlice';
import PlanUpdateComponent from './PlanUpdateComponent';

import './styles.css';

const CustomerProfile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const customer = useSelector((state) =>
    state.users.users.find((user) => user.id.toString() === id),
  );

  const currentPlan = useSelector((state) =>
    state.plans.plans.find((plan) => plan.id === customer?.planId),
  );

  if (!customer) {
    return <div>Customer not found.</div>;
  }

  const isRenewalNeeded = () => {
    const renewalDatePassed = new Date() > new Date(customer.renewalDate);
    return customer.planStatus === 'Expired' && renewalDatePassed;
  };

  const handleRenew = () => {
    dispatch(renewPlan({ userId: customer.id }));
  };

  return (
    <div className="customerProfile-container">
      <h2>Customer Profile</h2>
      <p className="customerProfile-detail">
        <strong>Name:</strong> {customer.name}
      </p>
      <p className="customerProfile-detail">
        <strong>Email:</strong> {customer.email}
      </p>
      <p className="customerProfile-detail">
        <strong>Mobile Number:</strong> {customer.mobileNumber}
      </p>
      <p className="customerProfile-detail">
        <strong>Date of Birth:</strong> {customer.dob}
      </p>
      <p className="customerProfile-detail">
        <strong>Plan Status:</strong> {customer.planStatus}
      </p>
      <p className="customerProfile-detail">
        <strong>Registration Date:</strong> {customer.registrationDate}
      </p>
      <p className="customerProfile-detail">
        <strong>Renewal Date:</strong> {customer.renewalDate}
      </p>
      <p className="customerProfile-detail">
        <strong>Current Plan:</strong> {currentPlan.name}
      </p>
      
      {isRenewalNeeded() ? (
        <button
          onClick={handleRenew}
          className="customerProfile-button customerProfile-button--success">
          Renew
        </button>
      ) : (
        <PlanUpdateComponent currentPlanId={customer.planId} userId={customer.id} />
      )}
    </div>
  );
};

export default CustomerProfile;
