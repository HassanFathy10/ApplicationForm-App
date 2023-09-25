import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApplicationForm } from '../store/ApplicationFormSlice';

function ApplicationForm({ version, programId }) {
  const dispatch = useDispatch();
  const applicationForm = useSelector((state) => state.applicationForm);

  useEffect(() => {
    // Dispatch the fetchApplicationForm action when the component mounts
    dispatch(fetchApplicationForm({ version, programId }));
  }, [dispatch, version, programId]);

  if (applicationForm.loading) {
    return <div>Loading...</div>;
  }

  if (applicationForm.error) {
    return <div>Error: {applicationForm.error}</div>;
  }

  if (!applicationForm.data) {
    return null; // Data not available yet
  }

  // Render your form using applicationForm.data
  return (
    <div>
      {/* Render your form components here */}
      {/* Example: */}
      <h1>Application Form</h1>
      <p>Name: {applicationForm.data.name}</p>
      {/* Add more form fields as needed */}
    </div>
  );
}

export default ApplicationForm;