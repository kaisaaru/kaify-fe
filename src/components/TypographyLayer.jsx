import React from 'react'
import HeadingFont from './child/HeadingFont'
import DisplayHeadingFont from './child/DisplayHeadingFont'
import HeadingColorsFont from './child/HeadingColorsFont'
import InlineTextElementsFont from '@/components/atom/typography/InlineTextElementsFont'
import TextFont from '@/components/atom/typography/TextFont'
import TextDecorationFont from '@/components/atom/typography/TextDecorationFont'
import BlockquoteBackgroundColorTextFont from './atom/typography/BlockquoteBackgroundColorTextFont'
import BlockquoteBorderColorFont from './atom/typography/BlockquoteBorderColorFont'

const TypographyLayer = () => {
    return (
        <div className="row gy-4">

            {/* HeadingFont */}
            <HeadingFont />

            {/* DisplayHeadingFont */}
            <DisplayHeadingFont />

            {/* HeadingColorsFont */}
            <HeadingColorsFont />

            {/* InlineTextElementsFont */}
            <InlineTextElementsFont />

            {/* TextFont */}
            <TextFont />

            {/* TextDecorationFont */}
            <TextDecorationFont />

            {/* BlockquoteBackgroundColorTextFont */}
            <BlockquoteBackgroundColorTextFont />


            {/* BlockquoteBorderColorFont */}
            <BlockquoteBorderColorFont />

        </div>

    )
}

export default TypographyLayer