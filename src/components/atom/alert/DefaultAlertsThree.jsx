import React from 'react';
import Alert from './Alert'; // Update path if needed

const DefaultAlertsThree = () => {
    const description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy";

    return (
        <div className="col-lg-6">
            <div className="card h-100 p-0">
                <div className="card-header border-bottom bg-base py-16 px-24">
                    <h6 className="text-lg fw-semibold mb-0">Default Alerts</h6>
                </div>
                <div className="card-body p-24 d-flex flex-column gap-4">
                    <Alert color="primary" title="This is a Primary alert" description={description} icon="mingcute:emoji-line" />
                    <Alert color="success" title="This is a Success alert" description={description} icon="bi:patch-check" />
                    <Alert color="warning" title="This is a Warning alert" description={description} icon="mdi:clock-outline" />
                    <Alert color="info" title="This is a Info alert" description={description} icon="mynaui:check-octagon" />
                    <Alert color="danger" title="This is a Danger alert" description={description} icon="mingcute:delete-2-line" />
                </div>
            </div>
        </div>
    );
};

export default DefaultAlertsThree;