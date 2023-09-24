import React from 'react'
import { Col } from 'react-bootstrap';

export default function PersonalForm() {
    return (
        <Col md={10} className='pt-5'>
            <article class="card">
                <article class="card-header">
                    Quote
                </article>
                <article class="card-body">
                    <blockquote class="blockquote mb-0">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                    </blockquote>
                </article>
            </article>
        </Col>
    );
}
