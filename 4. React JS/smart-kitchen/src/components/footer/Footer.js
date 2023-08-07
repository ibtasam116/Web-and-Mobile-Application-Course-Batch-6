import React from 'react'
import "./Footer.css"

export default function Footer(props) {

    const now = new Date();
    const year = now.getFullYear();

    return (
        <>
            <footer className={`${props.footbgColor} ${props.textColor}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-4">
                            <p className="mb-0 fw-bold text-center text-md-start">&copy; {year}. All Rights Reserved.</p>
                        </div>
                        <div className="d-none d-md-block col-md-8 text-end">
                            <a href="javascript:void(0)" target="_blank" rel="noopener noreferrer" className={`fw-bold text-dark ${props.textColor}`}>
                                Terms &amp; Conditions</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                            <a href="javascript:void(0)" target="_blank" rel="noopener noreferrer" className={`fw-bold text-dark ${props.textColor}`}>
                                Privacy Policy</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                            <a href="javascript:void(0)" target="_blank" rel="noopener noreferrer" className={`fw-bold text-dark ${props.textColor}`}>
                                Order Policy</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
