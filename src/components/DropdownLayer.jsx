import React from 'react'
import BasicDropdownPrimary from '@/components/atom/dropdown/BasicDropdownPrimary'
import DropUpPrimary from '@/components/atom/dropdown/DropUpPrimary'
import DroprightWarning from '@/components/atom/dropdown/DroprightWarning'
import DropleftWarning from '@/components/atom/dropdown/DropleftWarning'
import Placement from './child/Placement'
import GroupedDropdownButtons from '@/components/atom/dropdown/GroupedDropdownButtons'
import CustomDropdown from '@/components/atom/dropdown/CustomDropdown'
import DropdownSizes from '@/components/atom/dropdown/DropdownSizes'

const DropdownLayer = () => {
    return (
        <div className="row gy-4">

            {/* BasicDropdownPrimary */}
            <BasicDropdownPrimary />

            {/* DropUpPrimary */}
            <DropUpPrimary />

            {/* DroprightWarning */}
            <DroprightWarning />

            {/* DropleftWarning */}
            <DropleftWarning />

            {/* Placement */}
            <Placement />

            {/* GroupedDropdownButtons */}
            <GroupedDropdownButtons />

            {/* CustomDropdown */}
            <CustomDropdown />

            {/* DropdownSizes */}
            <DropdownSizes />

        </div>

    )
}

export default DropdownLayer