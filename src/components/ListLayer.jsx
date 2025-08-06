import React from 'react'
import DefaultList from './molecule/list/DefaultList'
import ActiveList from './molecule/list/ActiveList'
import ActiveListTwo from './molecule/list/ActiveListTwo'
import ListIconsLabel from './molecule/list/ListIconsLabel'
import ColoredLists from './molecule/list/ColoredLists'
import ListIconsLabelTwo from './molecule/list/ListIconsLabelTwo'

const ListLayer = () => {
    return (
        <div className="row gy-4">

            {/* DefaultList */}
            <DefaultList />

            {/* ActiveList */}
            <ActiveList />

            {/* ActiveListTwo */}
            <ActiveListTwo />

            {/* ListIconsLabel */}
            <ListIconsLabel />

            {/* ColoredLists */}
            <ColoredLists />

            {/* ListIconsLabelTwo */}
            <ListIconsLabelTwo />

        </div>

    )
}

export default ListLayer