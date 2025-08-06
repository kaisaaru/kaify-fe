import React from 'react'
import DefaultStarRatings from '@/components/atom/rating/DefaultStarRatings'
import HalfStar from '@/components/atom/rating/HalfStar'
import MultiColorStar from '@/components/atom/rating/MultiColorStar'
import RatingStar from '@/components/atom/rating/RatingStar'

const StarRatingLayer = () => {
    return (
        <div className="row gy-4">

            {/* DefaultStarRatings */}
            <DefaultStarRatings />

            {/* HalfStar */}
            <HalfStar />

            {/* MultiColorStar */}
            <MultiColorStar />

            {/* RatingStar */}
            <RatingStar />

        </div>

    )
}

export default StarRatingLayer