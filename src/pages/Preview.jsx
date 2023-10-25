import React from 'react';
import { useLocation } from 'react-router-dom';


export default function Preview() {
  const location = useLocation();
  const formData = location.state || JSON.parse(localStorage.getItem('formData')) || {};
  
  return (
    <article className='container'>
      <article className='row'>
        <article className='col-lg-10 col-md-10 col-sm-10 mt-5'>
          <article className='p-5'>
            <h2>Preview</h2>
            {formData?.photoData ? (
              <img src={formData.photoData} alt="UploadedImage" style={{ maxWidth: '100%', height: 'auto' }} />
            ) : (
              <p>No image data available</p>
            )}
            <p>Personal Data: {formData?.personalData?.firstName}</p>
            <p>Profile Data: {formData?.profileData}</p>
            <p>Additional Data: {formData?.additionalData}</p>
          </article>
        </article>
      </article>
    </article>
  );
}
