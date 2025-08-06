import React from 'react'
import DefaultBadges from '@/components/atom/badges/DefaultBadges'
import OutlineBadges from '@/components/atom/badges/OutlineBadges'
import SoftBadges from '@/components/atom/badges/SoftBadges'
import DefaultBadgesTwo from '@/components/atom/badges/DefaultBadgesTwo'
import GradientBadges from '@/components/atom/badges/GradientBadges'
import BadgesWithButton from '@/components/atom/badges/BadgesWithButton'
import DefaultBadgesThree from '@/components/atom/badges/DefaultBadgesThree'
import DefaultBadgesFour from '@/components/atom/badges/DefaultBadgesFour'
import DefaultBadgesFive from '@/components/atom/badges/DefaultBadgesFive'
import BadgeDotsStyle from '@/components/atom/badges/BadgeDotsStyle'


const BadgesLayer = () => {
    return (

        <div className="row gy-4">

            {/* DefaultBadges */}
            <DefaultBadges />

            {/* OutlineBadges */}
            <OutlineBadges />

            {/* SoftBadges */}
            <SoftBadges />

            {/* DefaultBadgesTwo */}
            <DefaultBadgesTwo />

            {/* GradientBadges */}
            <GradientBadges />

            {/* BadgesWithButton */}
            <BadgesWithButton />

            {/* DefaultBadgesThree */}
            <DefaultBadgesThree />

            {/* DefaultBadgesFour */}
            <DefaultBadgesFour />

            {/* DefaultBadgesFive */}
            <DefaultBadgesFive />

            {/* BadgeDotsStyle */}
            <BadgeDotsStyle />

        </div>

    )
}

export default BadgesLayer