import React, { useState } from 'react'
import Paragraph from './TypeForms/Paragraph';
import ShortAnswer from './TypeForms/ShortAnswer';
import YesNoForm from './TypeForms/YesNoForm';
import MultipleChoice from './TypeForms/MultipleChoice';
import DropDown from './TypeForms/DropDown';
import Date from './TypeForms/Date';
import Number from './TypeForms/Number';
import FileUpload from './TypeForms/FileUpload';
import VideoForm from './TypeForms/VideoForm';

export default function AddQuestionForm() {
    const [typeQuestion, setTypeQuestions] = useState('');
    const [showCard, setShowCard] = useState(false);

    const HandleSelectType = (e) => {
        const selectedValue = e.target.value;
        setTypeQuestions(selectedValue);
        setShowCard(true);
    };

    return (
        <article className='mt-4'>
            <article className="card shadow">
                <h5 className="card-header text-black fw-bolder bg-info">Questions</h5>
                <article className="card-body">
                    <h6 className="card-title fw-bolder">Type</h6>
                    <select className="form-select" onChange={HandleSelectType} defaultValue="" aria-label="Default select example">
                        <option value="">Type Here</option>
                        <option value="1">Paragraph</option>
                        <option value="2">Short Answer</option>
                        <option value="3">Yes/No</option>
                        <option value="4">Dropdown</option>
                        <option value="5">Multiple Choice</option>
                        <option value="6">Date</option>
                        <option value="7">Number</option>
                        <option value="8">File upload</option>
                        <option value="9">Video question</option>
                    </select>
                    <article>
                        {showCard && (
                            <article>
                                {typeQuestion === '1' && (<Paragraph />)}
                                {typeQuestion === '2' && (<ShortAnswer />)}
                                {typeQuestion === '3' && (<YesNoForm />)}
                                {typeQuestion === '4' && (<DropDown />)}
                                {typeQuestion === '5' && (<MultipleChoice />)}
                                {typeQuestion === '6' && (<Date />)}
                                {typeQuestion === '7' && (<Number />)}
                                {typeQuestion === '8' && (<FileUpload />)}
                                {typeQuestion === '9' && (<VideoForm />)}
                            </article>
                        )}
                    </article>
                </article>
            </article>
        </article>
    );
}
