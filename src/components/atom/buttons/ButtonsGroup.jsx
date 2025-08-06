import React from 'react';
import { Button, ButtonGroup } from './Button'; // Adjust path as needed

const ButtonsGroup = () => {
    return (
        <div className="col-xl-6">
            <div className="card h-100 p-0">
                <div className="card-header border-bottom bg-base py-16 px-24">
                    <h6 className="text-lg fw-semibold mb-0">Buttons Group</h6>
                </div>
                <div className="card-body py-16 px-24 d-flex flex-wrap align-items-center gap-3">
                    <ButtonGroup className="radius-8">
                        <Button color="primary" shape="square" className="radius-8">Left</Button>
                        <Button color="primary" shape="square">Middle</Button>
                        <Button color="primary" shape="square" className="radius-8">Right</Button>
                    </ButtonGroup>
                    <ButtonGroup className="radius-8">
                        <Button color="primary" shape="square" className="radius-50">Left</Button>
                        <Button color="primary" shape="square">Middle</Button>
                        <Button color="primary" shape="square" className="radius-50">Right</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button color="light" leftIcon="heroicons:bars-3-bottom-left-16-solid" />
                        <Button color="light" leftIcon="fe:bar" />
                        <Button color="light" leftIcon="heroicons:bars-3-bottom-right-16-solid" />
                    </ButtonGroup>
                </div>
            </div>
        </div>
    );
};

export default ButtonsGroup;