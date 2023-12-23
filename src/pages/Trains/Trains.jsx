import React, {useState} from 'react';
import styles from './Trains.module.css'
import {useModal} from "../../hooks/useModal";
import Modal from '../../components/UI/Modal/Modal'
import DataTableTrains from "../../components/CustomDataGrid/DataTableTrains";

const Trains = () => {
    const [isVisible, show, close] = useModal()

    const columns = [
        { id: 'id', label: 'Путь', width: '20px', align: 'center' },
        { id: 'name', label: 'Всего', width: '20px', align: 'center' },
        { id: 'age', label: 'Л', width: '100px', align: 'left' },
    ]

    const rows = [
        { id: 1, name: 'John Doe', age: [1, 2, 3], owner: ['HTC', 'GK', 'OTHER'], status: false  },
        { id: 2, name: 'Jane Doe', age: [3, 1, 2], owner: ['GK', 'HTC', 'OTHER'], status: true },
    ];

    return (
        <div className={styles.container}>
            <DataTableTrains columns={columns} initialRows={rows} />
        </div>
    );
};

export default Trains;
