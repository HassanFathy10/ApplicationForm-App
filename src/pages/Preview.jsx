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
              <ul class="list-group">
                <li class="list-group-item">
                  {formData?.photoData ? (
                    <img src={formData.photoData} alt="UploadedImage" style={{ maxWidth: '100%', height: 'auto' }} />
                  ) : (
                    <p>No image data available</p>
                  )}</li>
                <li class="list-group-item">
                  <ul className='list-unstyled'>
                    <li>Personal Data:</li>
                    <li>First Name: {formData?.personalData?.firstName}</li>
                    <li>Last Name: {formData?.personalData?.lastName}</li>
                  </ul>
                </li>
                <li class="list-group-item"><p>Profile Data: {formData?.profileData}</p></li>
                <li class="list-group-item"><p>Additional Data: {formData?.additionalData}</p></li>
                <li class="list-group-item">And a fifth one</li>
              </ul>
            </article>
          </article>
        </article>
      </article>
    </article>
  );
}
