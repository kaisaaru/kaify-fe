import React from 'react';
import Alert from './Alert'; // Update path if needed

const OutlineAlerts = () => {
    return (
        <div className="col-lg-6">
            <div className="card h-100 p-0">
                <div className="card-header border-bottom bg-base py-16 px-24">
                    <h6 className="text-lg fw-semibold mb-0">Outline Alerts</h6>
                </div>
                <div className="card-body p-24 d-flex flex-column gap-4">
                    <Alert variant="outline" color="primary" title="This is a Primary alert" />
                    <Alert variant="outline" color="secondary" title="This is a Secondary alert" />
                    <Alert variant="outline" color="warning" title="This is a Warning alert" />
                    <Alert variant="outline" color="info" title="This is a Info alert" />
                    <Alert variant="outline" color="danger" title="This is a Danger alert" />
                </div>
            </div>
        </div>
    );
};

export default OutlineAlerts;