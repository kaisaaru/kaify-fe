import React from 'react'
import NumberingWizard from './molecule/tabs/NumberingWizard'
import NumberingWizardWithLabel from './molecule/tabs/NumberingWizardWithLabel'
import OrderByFollowingStep from './molecule/tabs/OrderByFollowingStep'
import WizardWithBesideLabel from './molecule/tabs/WizardWithBesideLabel'

const WizardLayer = () => {
    return (
        <div className="row gy-4">

            {/* NumberingWizard */}
            <NumberingWizard />

            {/* NumberingWizardWithLabel */}
            <NumberingWizardWithLabel />

            {/* OrderByFollowingStep */}
            <OrderByFollowingStep />

            {/* WizardWithBesideLabel */}
            <WizardWithBesideLabel />

        </div>

    )
}

export default WizardLayer