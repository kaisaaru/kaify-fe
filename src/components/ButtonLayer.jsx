import React from 'react'
import DefaultButtons from '@/components/atom/buttons/DefaultButtons'
import OutlineButtons from '@/components/atom/buttons/OutlineButtons'
import RoundedButtons from '@/components/atom/buttons/RoundedButtons'
import RoundedButtonsTwo from '@/components/atom/buttons/RoundedButtonsTwo'
import SoftButtons from '@/components/atom/buttons/SoftButtons'
import TextButtons from '@/components/atom/buttons/TextButtons'
import ButtonsWithLabel from '@/components/atom/buttons/ButtonsWithLabel'
import ButtonsWithLabelRound from '@/components/atom/buttons/ButtonsWithLabelRound'
import ButtonsSizes from '@/components/atom/buttons/ButtonsSizes'
import CheckboxRadioButtons from './molecule/form/CheckboxRadioButtons'
import ButtonsGroup from '@/components/atom/buttons/ButtonsGroup'
import CustomButton from '@/components/atom/buttons/CustomButton'

const ButtonLayer = () => {
    return (
        <div className="row gy-4">

            {/* DefaultButtons */}
            <DefaultButtons />

            {/* OutlineButtons */}
            <OutlineButtons />

            {/* RoundedButtons */}
            <RoundedButtons />

            {/* RoundedButtonsTwo */}
            <RoundedButtonsTwo />

            {/* SoftButtons */}
            <SoftButtons />

            {/* TextButtons */}
            <TextButtons />

            {/* ButtonsWithLabel */}
            <ButtonsWithLabel />

            {/* ButtonsWithLabelRound */}
            <ButtonsWithLabelRound />

            {/* ButtonsSizes */}
            <ButtonsSizes />

            {/* CheckboxRadioButtons */}
            <CheckboxRadioButtons />

            {/* ButtonsGroup */}
            <ButtonsGroup />

            {/* CustomButton */}
            <CustomButton />

        </div>

    )
}

export default ButtonLayer