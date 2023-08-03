import React from 'react'
import "./Footer.css"

export default function Footer() {

    const now = new Date();
    const year = now.getFullYear();

    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-4">
                            <p className="mb-0 fw-bold text-dark text-center text-md-start">&copy; {year}. All Rights Reserved.</p>
                        </div>
                        <div className="d-none d-md-block col-md-8 text-end">
                            <a href="javascript:void(0)" target="_blank" rel="noopener noreferrer" className="fw-bold text-dark">
                                Terms &amp; Conditions</a> |
                            <a href="javascript:void(0)" target="_blank" rel="noopener noreferrer" className="fw-bold text-dark">
                                Privacy Policy</a> |
                            <a href="javascript:void(0)" target="_blank" rel="noopener noreferrer" className="fw-bold text-dark">
                                Order Policy</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
