import React from 'react'

export default function Footer_Main_Card(props) {
    return (
        <>
            <div className="col-2 cities">
                <ul>
                    <h6 className="mb-4 text-white">{props.Company}</h6>
                    <li>{props.Item1}</li>
                    <li>{props.Item2}</li>
                    <li>{props.Item3}</li>
                    <li>{props.Item4}</li>
                </ul>
            </div>
        </>
    )
}
