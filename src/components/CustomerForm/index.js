import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCustomer } from '../../reducers/usersSlice';
import { useNavigate } from 'react-router-dom';
import PlanSelectionForm from '../PlanSelectionForm';
import { formFields } from './CustomerFormFields';

import './styles.css';

const CustomerForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const plans = useSelector((state) => state.plans.plans);
  const [formData, setFormData] = useState({});
  const [selectedPlanId, setSelectedPlanId] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the number of days of validity to the current date to calculate the renewal date.
    // The validity is retrieved from the 'selectedPlan' object.
    const selectedPlan = plans.find((plan) => plan.id === selectedPlanId);
    let renewalDate = new Date();
    renewalDate.setDate(renewalDate.getDate() + (selectedPlan ? selectedPlan.validity : 0));

    const customerData = {
      ...formData,
      planId: selectedPlanId,
      planStatus: 'Active',
      renewalDate: renewalDate.toISOString().split('T')[0],
      id: Date.now(),
    };

    dispatch(addCustomer(customerData));
    console.log('Added Customer:', customerData);
    // Reset form data
    setFormData({});
    setSelectedPlanId('');
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="customer-form">
      {formFields.map((field) =>
        field.type === 'planSelection' ? (
          <div key={field.id} className="form-field">
            <PlanSelectionForm activePlanId={selectedPlanId} onPlanChange={setSelectedPlanId} />
          </div>
        ) : (
          <div key={field.id} className="form-field">
            <label htmlFor={field.id}>{field.label}</label>
            <input
              id={field.id}
              name={field.id}
              type={field.type}
              value={formData[field.id] || ''}
              onChange={handleChange}
              placeholder={field.placeholder || ''}
            />
          </div>
        ),
      )}
      <button type="submit">Submit</button>
    </form>
  );
};

export default CustomerForm;
