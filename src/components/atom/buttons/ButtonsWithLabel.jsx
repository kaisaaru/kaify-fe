import React from 'react';
import { Button } from './Button'; // Adjust path as needed

const ButtonsWithLabel = () => {
    return (
        <div className="col-xl-6">
            <div className="card h-100 p-0">
                <div className="card-header border-bottom bg-base py-16 px-24">
                    <h6 className="text-lg fw-semibold mb-0">Buttons with Label</h6>
                </div>
                <div className="card-body p-24">
                    <div className="d-flex flex-wrap align-items-center gap-3">
                        <Button color="primary" leftIcon="mingcute:square-arrow-left-line">Left Icon</Button>
                        <Button variant="outline" color="primary" leftIcon="mingcute:square-arrow-left-line">Left Icon</Button>
                        <Button color="success" rightIcon="mingcute:square-arrow-right-line">Right Icon</Button>
                        <Button variant="outline" color="success" rightIcon="mingcute:square-arrow-right-line">Right Icon</Button>
                        <Button color="warning" leftIcon="mingcute:square-arrow-up-line" />
                        <Button variant="outline" color="info" leftIcon="mingcute:square-arrow-down-line" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ButtonsWithLabel;