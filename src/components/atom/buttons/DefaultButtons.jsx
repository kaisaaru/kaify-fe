import React from 'react';
import { Button } from './Button'; // Adjust path as needed

const DefaultButtons = () => {
    return (
        <div className="col-xl-6">
            <div className="card h-100 p-0">
                <div className="card-header border-bottom bg-base py-16 px-24">
                    <h6 className="text-lg fw-semibold mb-0">Default Buttons</h6>
                </div>
                <div className="card-body p-24">
                    <div className="d-flex flex-wrap align-items-center gap-3">
                        <Button color="primary">Primary</Button>
                        <Button color="secondary">Secondary</Button>
                        <Button color="success">Success</Button>
                        <Button color="info">Info</Button>
                        <Button color="warning">Warning</Button>
                        <Button color="danger">Danger</Button>
                        <Button color="dark">Dark</Button>
                        <Button variant="link">Link</Button>
                        <Button color="light">Light</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DefaultButtons;