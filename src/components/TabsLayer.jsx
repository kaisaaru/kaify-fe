import DefaultTabs from './molecule/tabs/DefaultTabs'
import FocusTabs from './child/FocusTabs'
import ButtonTabs from './molecule/tabs/ButtonTabs'
import ButtonTabsTwo from './molecule/tabs/ButtonTabsTwo'
import VerticalNavTabs from './molecule/tabs/VerticalNavTabs'
import CardHeaderTabs from './molecule/card/CardHeaderTabs'

const TabsLayer = () => {
    return (
        <div className="row gy-4">

            {/* DefaultTabs */}
            <DefaultTabs />

            {/* FocusTabs */}
            <FocusTabs />

            {/* ButtonTabs */}
            <ButtonTabs />

            {/* ButtonTabsTwo */}
            <ButtonTabsTwo />

            {/* VerticalNavTabs */}
            <VerticalNavTabs />

            {/* CardHeaderTabs */}
            <CardHeaderTabs />

        </div>

    )
}

export default TabsLayer