import React from 'react';
import styles from './Checkbox.module.css'

const Checkbox = ({ label, checked, onChange }) => {
    return (
        <label className={styles.checkbox}>
            <input type="checkbox" checked={checked} onChange={onChange}/>
            {label}
        </label>
    );
};

export default Checkbox;