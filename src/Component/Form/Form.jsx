import React, {useState} from 'react'
import * as Unicons from '@iconscout/react-unicons';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Styles from './styles.module.css';
import './styles.module.css'


export default function Form() {
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
            <article className='col-lg-10 col-md-10 col-sm-6 p-5'>
                <Tabs
                    defaultActiveKey="home"
                    transition={false}
                    id="noanim-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="home" title="Home">
                    </Tab>
                    <Tab eventKey="profile" title="Profile">
                    </Tab>
                    <Tab eventKey="contact" title="Contact">
                    </Tab>
                </Tabs>
                <article className='row d-flex pt-5'>
                    <article className='col-lg-6'>
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
                                        <input type="file" id="inputGroupFile01" onChange={handleImageUpload} />
                                    </label>
                                </form>
                            </article>
                        </article>
                    </article>
                </article>
            </article>
    );
}
