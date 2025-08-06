import React from 'react';
import { Button } from './Button'; // Adjust path as needed

const CustomButton = () => {
    return (
        <div className="col-xl-6">
            <div className="card h-100 p-0">
                <div className="card-header border-bottom bg-base py-16 px-24">
                    <h6 className="text-lg fw-semibold mb-0">Buttons Group</h6>
                </div>
                <div className="card-body p-24">
                    <Button color="primary">Custom Button</Button>
                </div>
            </div>
        </div>
    );
};

export default CustomButton;