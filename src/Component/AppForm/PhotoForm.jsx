import React, { useState } from 'react'
import { Col } from 'react-bootstrap';
import * as Unicons from '@iconscout/react-unicons';
import Styles from './styles.module.css';

export default function PhotoForm() {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
        setSelectedImage(e.target.result);
        };
        reader.readAsDataURL(file);
    }
    };
    const handleDeleteImage = () => {
        setSelectedImage(null);
    };
    return (
        <Col md={10}>
            <article className='row pt-5'>
                <article className='col-sm-10'>
                    <article className='card text-start shadow'>
                        <article className='card-header bg-info'>
                            <span className=' text-light'>Upload cover image</span>
                        </article>
                        <article className='card-body text-center'>
                            {selectedImage && (
                                <div className={Styles.preview}>
                                    <img className={Styles.img} src={selectedImage} alt="Preview" />
                                    <button className=' btn btn-dark mb-3' onClick={handleDeleteImage}>Delete</button>
                                </div>
                            )}
                            <form className={Styles.upload}>
                                <h5 className='card-title'><Unicons.UilUpload /></h5>
                                <h5 className="card-title">Upload cover image</h5>
                                <p className="card-text text-black-50">16:9 ratio is recommended. Max image size 1mb</p>
                                <label htmlFor="inputGroupFile01">
                                    <input type="file" className={Styles.input} onChange={handleImageUpload} />
                                </label>
                            </form>
                        </article>
                    </article>
                </article>
            </article>
        </Col>
    );
}
