import React from 'react';
import { Button } from './Button'; // Adjust path as needed

const TextButtons = () => {
    return (
        <div className="col-xl-6">
            <div className="card h-100 p-0">
                <div className="card-header border-bottom bg-base py-16 px-24">
                    <h6 className="text-lg fw-semibold mb-0">Text Buttons</h6>
                </div>
                <div className="card-body p-24">
                    <div className="d-flex flex-wrap align-items-center gap-3">
                        <Button variant="text" color="primary" shape="pill">Primary</Button>
                        <Button variant="text" color="secondary" shape="pill">Secondary</Button>
                        <Button variant="text" color="success" shape="pill">Success</Button>
                        <Button variant="text" color="info" shape="pill">Info</Button>
                        <Button variant="text" color="warning" shape="pill">Warning</Button>
                        <Button variant="text" color="danger" shape="pill">Danger</Button>
                        <Button variant="text" color="dark" shape="pill">Dark</Button>
                        <Button variant="text" color="link" shape="pill">Link</Button>
                        <Button variant="text" color="light" shape="pill">Light</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TextButtons;