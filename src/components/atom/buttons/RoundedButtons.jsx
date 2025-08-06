import React from 'react';
import { Button } from './Button'; // Adjust path as needed

const RoundedButtons = () => {
    return (
        <div className="col-xl-6">
            <div className="card h-100 p-0">
                <div className="card-header border-bottom bg-base py-16 px-24">
                    <h6 className="text-lg fw-semibold mb-0">Rounded Buttons</h6>
                </div>
                <div className="card-body p-24">
                    <div className="d-flex flex-wrap align-items-center gap-3">
                        <Button shape="pill" color="primary">Primary</Button>
                        <Button shape="pill" color="secondary">Secondary</Button>
                        <Button shape="pill" color="success">Success</Button>
                        <Button shape="pill" color="info">Info</Button>
                        <Button shape="pill" color="warning">Warning</Button>
                        <Button shape="pill" color="danger">Danger</Button>
                        <Button shape="pill" color="dark">Dark</Button>
                        <Button shape="pill" variant="link">Link</Button>
                        <Button shape="pill" color="light">Light</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoundedButtons;