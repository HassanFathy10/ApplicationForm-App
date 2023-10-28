import React from 'react';
import { useLocation } from 'react-router-dom';


export default function Preview() {
  const location = useLocation();
  const formData = location.state || JSON.parse(localStorage.getItem('formData')) || {};
  
  return (
    <article className='container'>
      <article className='row'>
        <article className='col-lg-10 col-md-10 col-sm-10 mt-5'>
          <article className=' justify-content-center'>
            <h2 className='pb-5 text-center'>Preview</h2>
            <article className='d-flex justify-content-center'>
              <ul className="list-group">
                <li className="list-group-item">
                  {formData?.photoData ? (
                    <img src={formData.photoData} alt="UploadedImage" style={{ maxWidth: '100%', height: 'auto' }} />
                  ) : (
                    <p>No image data available</p>
                  )}</li>
                <li className="list-group-item">
                  <ul className='list-unstyled'>
                    <li className='text-decoration-underline fw-bold text-info pb-2'>Personal Data:</li>
                    <li className='fw-bold'>First Name: <span className='text-success fw-medium'>{formData?.personalData?.firstName}</span></li>
                    <li className='fw-bold'>Last Name: <span className='text-success fw-medium'>{formData?.personalData?.lastName}</span></li>
                    <li className='fw-bold'>Email: <span className='text-success fw-medium'>{formData?.personalData?.email}</span></li>
                  </ul>
                </li>
                <li className="list-group-item"><p>Profile Data: {formData?.profileData}</p></li>
                <li className="list-group-item"><p>Additional Data: {formData?.additionalData}</p></li>
                <li className="list-group-item">And a fifth one</li>
              </ul>
            </article>
          </article>
        </article>
      </article>
    </article>
  );
}
