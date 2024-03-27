import { useState } from 'react';
import PlanSelectionForm from '../PlanSelectionForm'; // Verify the path is correct
import { useDispatch } from 'react-redux';
import { updatePlan } from '../../reducers/usersSlice'; // Verify the path is correct

import './styles.css'; // Ensure CSS path is correct

const PlanUpdateComponent = ({ userId, currentPlanId }) => {
  const dispatch = useDispatch();
  const [showPlanSelection, setShowPlanSelection] = useState(false);
  const [newPlanId, setNewPlanId] = useState(currentPlanId);

  const handlePlanChange = (planId) => {
    setNewPlanId(planId);
  };

  const handleUpdateClick = () => {
    setShowPlanSelection(true);
  };

  const confirmPlanUpdate = () => {
    if (newPlanId && newPlanId !== currentPlanId) {
      const isConfirmed = window.confirm('Are you sure you want to update the plan?');
      if (isConfirmed) {
        // Dispatch the action to update the plan with both userId and newPlanId
        dispatch(updatePlan({ userId, planId: newPlanId }));
        setShowPlanSelection(false);
      }
    } else {
      alert('Please select a different plan to update.');
    }
  };

  return (
    <div className="plan-update-container">
      {showPlanSelection ? (
        <>
          <div className="plan-selection-form">
            <PlanSelectionForm activePlanId={currentPlanId} onPlanChange={handlePlanChange} />
          </div>
          <button className="confirm-plan-update" onClick={confirmPlanUpdate}>
            Confirm Plan Update
          </button>
        </>
      ) : (
        <button className="update-plan" onClick={handleUpdateClick}>
          Update Plan
        </button>
      )}
    </div>
  );
};

export default PlanUpdateComponent;
