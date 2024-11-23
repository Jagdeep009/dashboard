import React from 'react'

function Modal({children, id}) {
    return (
        <div className="modal fade" id={id} tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal