import React from 'react'

export default function Footer_Header_Card(props) {
    return (
        <div className="col cities">
            <ul>
                <li>{props.Item1}</li>
                <li>{props.Item2}</li>
                <li>{props.Item3}</li>
                <li>{props.Item4}</li>
                <li>{props.Item5}</li>
            </ul>
        </div>

    )
}
