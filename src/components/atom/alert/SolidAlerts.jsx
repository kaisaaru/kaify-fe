import React from 'react';
import Alert from './Alert'; // Update path if needed

const SolidAlerts = () => {
    return (
        <div className="col-xl-12">
            <div className="card h-100 p-0">
                <div className="card-header border-bottom bg-base py-16 px-24">
                    <h6 className="text-lg fw-semibold mb-0">Solid Alerts</h6>
                </div>
                <div className="card-body p-24">
                    <div className="row gy-4">
                        <div className="col-sm-6">
                            <div className="d-flex flex-column gap-4">
                                <Alert variant="solid" color="primary" title="This is a Primary alert" />
                                <Alert variant="solid" color="success" title="This is a Success alert" />
                                <Alert variant="solid" color="info" title="This is a Info alert" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="d-flex flex-column gap-4">
                                <Alert variant="solid" color="secondary" title="This is a Secondary alert" />
                                <Alert variant="solid" color="warning" title="This is a Warning alert" />
                                <Alert variant="solid" color="danger" title="This is a Danger alert" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SolidAlerts;