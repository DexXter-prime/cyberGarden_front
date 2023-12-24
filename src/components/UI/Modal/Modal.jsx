import React from 'react';
import styles from './Modal.module.css'

const Modal = ({ children, closeModal }) => {
    return (
        <div className={styles.modal__backdrop} onClick={closeModal}>
            <div className={styles.modal__window} onClick={(e) => e.stopPropagation()}>
                { children }
            </div>
        </div>
    );
};

export default Modal;
