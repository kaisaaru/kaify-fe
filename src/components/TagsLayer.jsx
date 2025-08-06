import React from 'react'
import DefaultTags from '@/components/atom/badges/DefaultTags'
import ColorsTags from '@/components/atom/badges/ColorsTags'
import TagsWithImage from '@/components/atom/badges/TagsWithImage'
import TagsIndicator from '@/components/atom/badges/TagsIndicator'

const TagsLayer = () => {
    return (
        <div className="row gy-4">

            {/* DefaultTags */}
            <DefaultTags />

            {/* ColorsTags */}
            <ColorsTags />

            {/* TagsWithImage */}
            <TagsWithImage />

            {/* TagsIndicator */}
            <TagsIndicator />

        </div>

    )
}

export default TagsLayer