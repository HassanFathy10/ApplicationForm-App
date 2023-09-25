import React, { useEffect ,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTemplate } from '../store/ApplicationFormSlice';

const ApplicationForm = () => {
  const [selectedTemplate, setSelectTemplate] = useState(null);
  const dispatch = useDispatch();
  const applicationForm = useSelector((state) => state.applicationForm);
console.log(setSelectTemplate)
  useEffect(() => {
    // Dispatch the fetchApplicationForm action when the component mounts
    dispatch(getTemplate());
  }, [dispatch]);

  const getTemplateId = (id) => {
    const selectedTemplate = applicationForm.find((book) => book.id === id);
    setSelectTemplate((prev) => {
      return { ...prev, ...selectedTemplate };
    });

  };
  if (applicationForm.loading) {
    return <div>Loading...</div>;
  }

  if (applicationForm.error) {
    return <div>Error: {applicationForm.error}</div>;
  }

  if (!applicationForm.data) {
    return null; 
  }

  return (
    <div >
    </div>
  );
}

export default ApplicationForm;