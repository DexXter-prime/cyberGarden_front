import React, {useState} from 'react';
import styles from './Trains.module.css'
import {useModal} from "../../hooks/useModal";
import Modal from '../../components/UI/Modal/Modal'
import DataTableTrains from "../../components/CustomDataGrid/DataTableTrains";

const Trains = () => {
    const [isVisible, show, close] = useModal()

    const columns = [
        { id: 'id', label: 'Путь', width: 10, align: 'center' },
        { id: 'name', label: 'Всего', width: 10, align: 'center' },
        { id: 'age', label: 'Л', width: 300, align: 'left' },
    ]

    const rows = [
        { id: 1, name: 'John Doe', age: [1, 2, 3] },
        { id: 2, name: 'Jane Doe', age: [3, 1, 2] },
    ];

    return (
        <div className={styles.container}>
            <button onClick={show}>CLICK ME!!!</button>
            {
                isVisible &&  <Modal closeModal={close}>
                    <div className={styles.modal}>
                        <div>
                            <h3>Текс</h3>
                            <p>Описание</p>
                        </div>
                        <div>
                            <h3>Текс</h3>
                            <p>Описание</p>
                        </div>
                        <div>
                            <h3>Текс</h3>
                            <p>Описание</p>
                        </div>
                        <div>
                            <h3>Текс</h3>
                            <p>Описание</p>
                        </div>
                        <div>
                            <h3>Текс</h3>
                            <p>Описание</p>
                        </div>
                        <div>
                            <h3>Текс</h3>
                            <p>Описание</p>
                        </div>
                        <div>
                            <h3>Текс</h3>
                            <p>Описание</p>
                        </div>
                        <div>
                            <h3>Текс</h3>
                            <p>Описание</p>
                        </div>
                    </div>
                </Modal>
            }
            <DataTableTrains columns={columns} initialRows={rows} />
        </div>
    );
};

export default Trains;
