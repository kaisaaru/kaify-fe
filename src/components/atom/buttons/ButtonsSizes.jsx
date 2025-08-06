import React from 'react';
import { Button } from './Button'; // Adjust path as needed

const ButtonsSizes = () => {
    return (
        <div className="col-xl-6">
            <div className="card h-100 p-0">
                <div className="card-header border-bottom bg-base py-16 px-24">
                    <h6 className="text-lg fw-semibold mb-0">Buttons Sizes</h6>
                </div>
                <div className="card-body p-24">
                    <div className="d-flex flex-wrap align-items-center gap-3">
                        <Button size="lg" color="primary">Large Button</Button>
                        <Button size="md" color="success">Medium Button</Button>
                        <Button size="sm" color="warning">Small Button</Button>
                    </div>
                    <div className="d-flex flex-wrap align-items-center gap-3 mt-16">
                        <Button variant="soft" size="lg" color="primary">Large Button</Button>
                        <Button variant="soft" size="md" color="success">Medium Button</Button>
                        <Button variant="soft" size="sm" color="warning">Small Button</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ButtonsSizes;