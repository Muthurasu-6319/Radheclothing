import React from 'react';

const Toast = ({ message, isVisible }) => {
    if (!isVisible) return null;

    return (
        <div className="toast-container">
            <div className="toast">
                <i className="fas fa-check-circle"></i>
                <span>{message}</span>
            </div>
        </div>
    );
};

export default Toast;
