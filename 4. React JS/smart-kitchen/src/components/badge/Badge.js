import React from 'react'

export default function Badge(props) {
    return (
        <>
            <span className="badge bg-success">{props.badgeTitle}</span>
        </>
    )
}
