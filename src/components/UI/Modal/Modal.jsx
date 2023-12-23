import React from 'react';
import styles from './Modal.module.css'

const Modal = ({ children, closeModal }) => {
    return (
        <div className={styles.modal__backdrop} onClick={closeModal}>
            <div className={styles.modal__window} onClick={(e) => e.stopPropagation()}>
                { children }
            </div>
            <button
                style={{
                    position: 'absolute',
                    top: '25%',
                    right: '35%',
                    width: '5px',
                    height: '5px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                onClick={closeModal}
            >
                X
            </button>
        </div>
    );
};

export default Modal;