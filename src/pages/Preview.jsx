import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as Unicons from '@iconscout/react-unicons';



export default function Preview() {
  const location = useLocation();
  const formData = location.state || JSON.parse(localStorage.getItem('formData')) || {};
  const [showPreview, setShowPreview] = useState(true);
  const handleSendClick = () => {
    // Your send logic here
    console.log('Sending data:', formData);

    // Set showPreview to false to hide the preview
    setShowPreview(false);
  };
  return (
    <article className='container'>
      <article className='row'>
        <article className='col-lg-10 col-md-10 col-sm-10 mt-5'>
          {showPreview ? (
            <article className=' justify-content-center'>
              <h2 className='pb-5 text-center'>Preview</h2>
              <article className='d-flex justify-content-center pb-5'>
                <ul className="list-group">
                  <li className="list-group-item">
                    {formData?.photoData ? (
                      <img src={formData.photoData} alt="UploadedImage" style={{ maxWidth: '100%', height: 'auto' }} />
                    ) : (
                      <p>No image data available</p>
                    )}</li>
                  <li className="list-group-item">
                    <ul className='list-unstyled list-group-item'>
                      <li className='text-decoration-underline fw-bold text-info pb-2'>Personal Data:</li>
                      <li className='fw-bold list-group-item'>First Name: <span className='text-success fw-medium'>{formData?.personalData?.firstName || 'empty'}</span></li>
                      <li className='fw-bold list-group-item'>Last Name: <span className='text-success fw-medium'>{formData?.personalData?.lastName || 'empty'}</span></li>
                      <li className='fw-bold list-group-item'>Email: <span className='text-success fw-medium'>{formData?.personalData?.email || 'empty'}</span></li>
                      <li className='fw-bold list-group-item'>phone: <span className='text-success fw-medium'>{formData?.personalData?.phone || 'empty'}</span></li>
                      <li className='fw-bold list-group-item'>Nationality: <span className='text-success fw-medium'>{formData?.personalData?.nationality || 'empty'}</span></li>
                      <li className='fw-bold list-group-item'>Id Number: <span className='text-success fw-medium'>{formData?.personalData?.idNumber || 'empty'}</span></li>
                      <li className='fw-bold list-group-item'>Date Of Birth: <span className='text-success fw-medium'>{formData?.personalData?.dateOfBirth || 'empty'}</span></li>
                      <li className='fw-bold list-group-item'>Gender: <span className='text-success fw-medium'>{formData?.personalData?.gender || 'empty'}</span></li>
                      <li className='text-decoration-underline fw-bold text-info pb-2 pt-2'>Questions:</li>
                      <li className='fw-bold list-group-item'>Type Question: <span className='text-success fw-medium'>{formData?.personalData?.typeQuestions || 'empty'}</span></li>
                      <li className='fw-bold list-group-item'>Require: <span className='text-success fw-medium'>{formData?.personalData?.question || 'empty'}</span></li>
                    </ul>
                  </li>
                  <ul className='list-unstyled list-group-item'>
                    <li className='text-decoration-underline fw-bold text-info pb-2'>Profile Data:</li>
                    <li className="fw-bold list-group-item">Education: <span className='text-success fw-medium'>{formData?.profileData?.Education || 'empty'}</span></li>
                    <li className="fw-bold list-group-item">Experience Years: <span className='text-success fw-medium'>{formData?.profileData?.Experience || 'empty'}</span></li>
                  </ul>
                  <ul className='list-unstyled list-group-item'>
                    <li className='text-decoration-underline fw-bold text-info pb-2'>Additional Data:</li>
                    <li className="fw-bold list-group-item">Education: <span className='text-success fw-medium'>{formData?.profileData?.Education || 'empty'}</span></li>
                    <li className="fw-bold list-group-item">Experience Years: <span className='text-success fw-medium'>{formData?.profileData?.Experience || 'empty'}</span></li>
                  </ul>
                </ul>
              </article>
              <article className='position-absolute m-5 bottom-0 end-0'>
                <button type='submit' className='btn btn-success' onClick={handleSendClick}>Send</button>
              </article>
            </article>) : (
            <article className='text-center d-grid pt-5'>
              <h1 className=' pb-2'><Unicons.UilCheckCircle size='5rem' color='#15A092' /></h1>
              <p className='fw-bolder text-success fs-4'>Your application has been submitted successfully</p>
            </article>
          )}
        </article>
      </article>
    </article>
  );
}
