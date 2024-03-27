import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const PlanSelectionForm = ({ activePlanId = 0, onPlanChange }) => {
  const [selectedPlanId, setSelectedPlanId] = useState(activePlanId);
  const plans = useSelector((state) => state.plans.plans);

  useEffect(() => {
    setSelectedPlanId(activePlanId);
  }, [activePlanId]);

  useEffect(() => {
    onPlanChange(selectedPlanId);
  }, [selectedPlanId, onPlanChange]);

  const handlePlanChange = (e) => {
    setSelectedPlanId(Number(e.target.value));
  };

  return (
    <div>
      <label htmlFor="planSelect">Select Plan:</label>
      <select id="planSelect" value={selectedPlanId || ''} onChange={handlePlanChange}>
        <option value="">Please select a plan</option>
        {plans.map((plan) => (
          <option key={plan.id} value={plan.id}>
            {plan.name} - ${plan.cost} - {plan.validity} days
          </option>
        ))}
      </select>
    </div>
  );
};

export default PlanSelectionForm;
