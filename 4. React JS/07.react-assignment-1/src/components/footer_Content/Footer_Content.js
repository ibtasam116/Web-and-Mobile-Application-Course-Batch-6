import React from 'react'

export default function Footer_Content(props) {
    return (
        <div className="footer__content">
            <h3 className="footer__title">{props.footer_title}</h3>

            <ul className="footer__links">
                <li>
                    <a href="#" className="footer__link">{props.footer_link1}</a>
                </li>
                <li>
                    <a href="#" className="footer__link">{props.footer_link2}</a>
                </li>
                <li>
                    <a href="#" className="footer__link">{props.footer_link3}</a>
                </li>
            </ul>
        </div>
    )
}
