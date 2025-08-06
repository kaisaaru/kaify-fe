import PricingPlanMultipleColor from './child/PricingPlanMultipleColor'
import SimplePricingPlan from './molecule/statistic/SimplePricingPlan'

const PricingLayer = () => {
    return (
        <>
            {/* PricingPlanMultipleColor */}
            <PricingPlanMultipleColor />


            {/* SimplePricingPlan */}
            <SimplePricingPlan />
        </>

    )
}

export default PricingLayer