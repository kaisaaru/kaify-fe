import React from 'react';
import { Button } from './Button'; // Adjust path as needed

const OutlineButtons = () => {
    return (
        <div className="col-xl-6">
            <div className="card h-100 p-0">
                <div className="card-header border-bottom bg-base py-16 px-24">
                    <h6 className="text-lg fw-semibold mb-0">Outline Buttons</h6>
                </div>
                <div className="card-body p-24">
                    <div className="d-flex flex-wrap align-items-center gap-3">
                        <Button variant="outline" color="primary">Primary</Button>
                        <Button variant="outline" color="secondary">Secondary</Button>
                        <Button variant="outline" color="success">Success</Button>
                        <Button variant="outline" color="info">Info</Button>
                        <Button variant="outline" color="warning">Warning</Button>
                        <Button variant="outline" color="danger">Danger</Button>
                        <Button variant="outline" color="dark">Dark</Button>
                        <Button variant="outline" color="link">Link</Button>
                        <Button variant="outline" color="light">Light</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OutlineButtons;