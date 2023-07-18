import React from "react";

import "../Footer.css"

function Footer_Bottom() {
    return (
        <>
            <footer>
                <div className="row mt-2">
                    <div className="col-6  ">
                        <p className="mb-0 ps-4 ms-3">All rights Reserved <span className="fw-bold">&copy; Your Company,
                            2021</span></p>
                    </div>
                    <div className="col-6 text-end">
                        <p className="mb-0 pe-4 me-3">Made with &#128155; by <span className="fw-bold">Themewagon</span></p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer_Bottom;