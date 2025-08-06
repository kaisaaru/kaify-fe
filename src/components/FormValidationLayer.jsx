import React from 'react'
import InputCustomStyles from './molecule/form/InputCustomStyles'
import InputStatus from './molecule/form/InputStatus'

const FormValidationLayer = () => {
    return (
        <div className="row gy-4">

            {/* InputCustomStyles */}
            <InputCustomStyles />

            {/* InputStatus */}
            <InputStatus />

        </div>

    )
}

export default FormValidationLayer