import React from 'react';
import { Button } from './Button'; // Adjust path as needed

const RoundedButtonsTwo = () => {
    return (
        <div className="col-xl-6">
            <div className="card h-100 p-0">
                <div className="card-header border-bottom bg-base py-16 px-24">
                    <h6 className="text-lg fw-semibold mb-0">Rounded Buttons</h6>
                </div>
                <div className="card-body p-24">
                    <div className="d-flex flex-wrap align-items-center gap-3">
                        <Button variant="outline" shape="pill" color="primary">Primary</Button>
                        <Button variant="outline" shape="pill" color="secondary">Secondary</Button>
                        <Button variant="outline" shape="pill" color="success">Success</Button>
                        <Button variant="outline" shape="pill" color="info">Info</Button>
                        <Button variant="outline" shape="pill" color="warning">Warning</Button>
                        <Button variant="outline" shape="pill" color="danger">Danger</Button>
                        <Button variant="outline" shape="pill" color="dark">Dark</Button>
                        <Button variant="outline" shape="pill" color="link">Link</Button>
                        <Button variant="outline" shape="pill" color="light">Light</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoundedButtonsTwo;