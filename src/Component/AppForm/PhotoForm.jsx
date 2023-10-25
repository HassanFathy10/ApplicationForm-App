import React, { useState, useRef } from 'react'
import { Col } from 'react-bootstrap';
import * as Unicons from '@iconscout/react-unicons';
import Styles from './styles.module.css';

export default function PhotoForm(props) {
    const [selectedImage, setSelectedImage] = useState(null);
    const fileInputRef = useRef(null);

    const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            setSelectedImage(e.target.result);
            props.setFormData((prevData) => ({
                ...prevData,
                photoData: e.target.result,
            }));
        };
        reader.readAsDataURL(file);
        }
        console.log('Selected Image:', event.target.result);
        console.log('FormData PhotoData:', props.formData.photoData);
    };
    const handleDeleteImage = (e) => {
        setSelectedImage(null);
        props.setFormData((prevData) => ({
            ...prevData,
            photoData: '',
        }));
        console.log('Selected Image:', e.target.result);
        console.log('FormData PhotoData:', props.formData.photoData);
    };

    return (
        <Col md={10}>
            <article className='row pt-5'>
                <article className='col-sm-10'>
                    <article className='card text-start shadow'>
                        <h5 className="card-header text-black fw-bolder bg-info">Personal Information</h5>
                        <article className='card-body text-center'>
                            <form className={Styles.upload}>
                                {selectedImage ? (
                                    <article className={`d-grid justify-content-center ${Styles.preview}`}>
                                        <img className={Styles.img} src={selectedImage} alt="Preview" />
                                        <button className='btn justify-content-center btn-danger m-3' onClick={handleDeleteImage}>Delete</button>
                                        <label className='btn btn-success'>
                                            ReUpload
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={handleImageUpload}
                                                style={{ display: 'none' }}
                                                ref={fileInputRef}
                                                className='btn'
                                            />
                                        </label>
                                    </article>
                                ) : (
                                    <>
                                        <h5 className='card-title'><Unicons.UilUpload /></h5>
                                        <h5 className="card-title">Upload cover image</h5>
                                        <p className="card-text text-black-50">16 : 9 ratio is recommended. Max image size 1mb</p>
                                            <label className='btn btn-success'>
                                                Upload Image
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={handleImageUpload}
                                                style={{ display: 'none' }}
                                                ref={fileInputRef}
                                                className='btn'
                                            />
                                        </label>
                                    </>
                                )}
                            </form>
                        </article>
                    </article>
                </article>
            </article>
        </Col>
    );
};
