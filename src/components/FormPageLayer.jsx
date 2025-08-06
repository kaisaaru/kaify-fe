import React from 'react'
import DefaultInputs from './molecule/form/DefaultInputs'
import InputSizing from './molecule/form/InputSizing'
import TextareaInputField from './molecule/form/TextareaInputField'

const FormPageLayer = () => {
    return (
        <div className="row gy-4">

            {/* DefaultInputs */}
            <DefaultInputs />

            {/* InputSizing */}
            <InputSizing />

            {/* TextareaInputField */}
            <TextareaInputField />

        </div>

    )
}

export default FormPageLayer