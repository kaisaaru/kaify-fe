import DefaultRadio from './molecule/form/DefaultRadio'
import RadioDisable from './molecule/form/RadioDisable'
import RadioWithButton from './molecule/form/RadioWithButton'
import RadioHorizontal from './molecule/form/RadioHorizontal'
import RadioVertical from './molecule/form/RadioVertical'

const RadioLayer = () => {
    return (
        <div className="row gy-4">

            {/* DefaultRadio */}
            <DefaultRadio />

            {/* RadioDisable */}
            <RadioDisable />

            {/* RadioWithButton */}
            <RadioWithButton />


            {/* RadioHorizontal */}
            <RadioHorizontal />

            {/* RadioVertical */}
            <RadioVertical />

        </div>

    )
}

export default RadioLayer