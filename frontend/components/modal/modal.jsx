import React from 'react';

const Modal = ({ modal, hideModal }) => {
    if (!modal) {
        return null;
    }

    let component;

    switch (modal) {
        case 'post':
            component = <PostFormContainer />;
            break;
        case 'signup':
            component = <SignupFormContainer />;
            break;
        default:
            return null;
    }

    return (
        <div className="modal-background" onClick={hideModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

export default Modal;