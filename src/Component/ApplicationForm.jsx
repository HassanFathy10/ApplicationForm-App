import React, { useEffect  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApplicationForm, getTemplate, updateTemplate } from '../store/ApplicationFormSlice';

const ApplicationForm = () => {
  const dispatch = useDispatch();
  const { templates, loading, error } = useSelector((state) => state.applicationForm);

  useEffect(() => {
    // Fetch templates when the component mounts
    dispatch(fetchApplicationForm());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Templates</h1>
      {templates.map((template) => (
        <div key={template.id}>
          <p>Template Name: {template.name}</p>
          {/* Render other template properties here */}
        </div>
      ))}
    </div>
  );
}

export default ApplicationForm;