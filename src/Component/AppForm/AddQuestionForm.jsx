import React, { useState } from 'react'

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
                <h5 className="card-header text-black fw-bolder bg-info">Featured</h5>
                <article className="card-body">
                    <h6 className="card-title fw-bolder">Type</h6>
                    <select className="form-select" onChange={HandleSelectType} defaultValue="" aria-label="Default select example">
                        <option value="">Type Here</option>
                        <option value="1">Paragraph</option>
                        <option value="2">Short answer</option>
                        <option value="3">Yes/No</option>
                        <option value="4">Dropdown</option>
                        <option value="5">Number</option>
                        <option value="6">File upload</option>
                        <option value="7">Video question</option>
                    </select>
                    <article>
                        {showCard && (
                            <article>
                                {typeQuestion === '1' && (<p className='p-5 fs-1'>asdsad</p>)}
                                {typeQuestion === '2' && (<p className='p-5 fs-1'>ad</p>)}
                                {typeQuestion === '3' && (<p className='p-5 fs-1'>asdsad</p>)}
                                {typeQuestion === '4' && (<p className='p-5 fs-1'>asdsad</p>)}
                                {typeQuestion === '5' && (<p className='p-5 fs-1'>asdsad</p>)}
                                {typeQuestion === '6' && (<p className='p-5 fs-1'>asdsad</p>)}
                                {typeQuestion === '7' && (<p className='p-5 fs-1'>asdsad</p>)}
                            </article>
                        )}
                    </article>
                </article>
            </article>
        </article>
    );
}
