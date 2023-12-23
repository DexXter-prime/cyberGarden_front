import React, {useState} from 'react';
import styles from './Trains.module.css'
import {useModal} from "../../hooks/useModal";
import Modal from '../../components/UI/Modal/Modal'
import DataTableTrains from "../../components/CustomDataGrid/DataTableTrains";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const Trains = () => {
    const [isVisible, show, close] = useModal();

    const [selectedOwner, setSelectedOwner] = useState('');
    const [selectedWagonType, setSelectedWagonType] = useState('');
    const [selectedValidity, setSelectedValidity] = useState('');
    const [selectedDowntime, setSelectedDowntime] = useState('');
    const [selectedDaysToRepair, setSelectedDaysToRepair] = useState('');

    const [filterValues, setFilterValues] = useState({
        owner: '',
        wagonType: '',
        validity: '',
        downtime: '',
        daysToRepair: '',
    });

    const columns = [
        { id: 'id', label: 'Путь', width: '20px', align: 'center' },
        { id: 'name', label: 'Всего', width: '20px', align: 'center' },
        { id: 'age', label: 'Л', width: '100px', align: 'left' },
    ]

    const rows = [
        { id: 1, name: 'John Doe', age: [1, 2, 3], owner: ['HTC', 'GK', 'OTHER'], status: false  },
        { id: 2, name: 'Jane Doe', age: [3, 1, 2], owner: ['GK', 'HTC', 'OTHER'], status: true },
    ];

    const applyFilters = () => {
        setFilterValues({
            owner: selectedOwner,
            wagonType: selectedWagonType,
            validity: selectedValidity,
            downtime: selectedDowntime,
            daysToRepair: selectedDaysToRepair,
        });
        // Тут думаю сделаем отправка запроса большого на бек со всеми фильтрами
    };

    return (
        <div className={styles.container}>
            <div className={styles.container__filter}>
                <FormControl variant="filled" sx={{ m: 1, minWidth: 150 }}>
                    <InputLabel id="demo-simple-select-filled-label">Собственник</InputLabel>
                    <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={selectedOwner}
                        onChange={(e) => setSelectedOwner(e.target.value)}
                    >
                    <MenuItem value="">
                        <em>Не выбрано</em>
                    </MenuItem>
                    <MenuItem value={1}>Собственник 1</MenuItem>
                    <MenuItem value={2}>Собственник 2</MenuItem>
                    <MenuItem value={3}>Собственник 3</MenuItem>
                    </Select>
                </FormControl>

                <FormControl variant="filled" sx={{ m: 1, minWidth: 150 }}>
                    <InputLabel id="demo-simple-select-filled-label">Тип вагона</InputLabel>
                    <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={selectedWagonType}
                    onChange={(e) => setSelectedWagonType(e.target.value)}
                    >
                    <MenuItem value={4}>Все</MenuItem>
                    <MenuItem value={5}>Инновационный</MenuItem>
                    <MenuItem value={6}>Люковый</MenuItem>
                    <MenuItem value={7}>Безлюковый</MenuItem>
                    </Select>
                </FormControl>

                <FormControl variant="filled" sx={{ m: 1, minWidth: 150 }}>
                    <InputLabel id="demo-simple-select-filled-label">Годность</InputLabel>
                    <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={selectedValidity}
                    onChange={(e) => setSelectedValidity(e.target.value)}
                    >
                    <MenuItem value="">
                        <em>Не выбрано</em>
                    </MenuItem>
                    <MenuItem value={8}>Экспорт</MenuItem>
                    <MenuItem value={9}>РФ</MenuItem>
                    <MenuItem value={10}>ЗапСиб</MenuItem>
                    <MenuItem value={11}>Больной</MenuItem>
                    <MenuItem value={12}>Кроме КЗ</MenuItem>
                    </Select>
                </FormControl>

                <FormControl variant="filled" sx={{ m: 1, minWidth: 150 }}>
                    <InputLabel id="demo-simple-select-filled-label">Простой</InputLabel>
                    <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={selectedDowntime}
                        onChange={(e) => setSelectedDowntime(e.target.value)}
                    >
                    <MenuItem value="">
                        <em>Не выбрано</em>
                    </MenuItem>
                    <MenuItem value={13}>1-3 суток</MenuItem>
                    <MenuItem value={14}>4-5 суток</MenuItem>
                    <MenuItem value={15}>6-10 суток</MenuItem>
                    <MenuItem value={16}>более 10 суток</MenuItem>
                    </Select>
                </FormControl>

                <FormControl variant="filled" sx={{ m: 1, minWidth: 170 }}>
                    <InputLabel id="demo-simple-select-filled-label">Дней до ремонта</InputLabel>
                    <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={selectedDaysToRepair}
                        onChange={(e) => setSelectedDaysToRepair(e.target.value)}
                    >
                    <MenuItem value="">
                        <em>Не выбрано</em>
                    </MenuItem>
                    <MenuItem value={17}>1-3 суток</MenuItem>
                    <MenuItem value={18}>4-5 суток</MenuItem>
                    <MenuItem value={19}>6-10 суток</MenuItem>
                    <MenuItem value={20}>более 10 суток</MenuItem>
                    </Select>
                </FormControl>
                <button className={styles.btn_save} onClick={applyFilters}>Применить фильтры</button>
            </div>
            <DataTableTrains
                columns={columns}
                initialRows={rows}
                filterValues={filterValues}
            />
        </div>
    );
};

export default Trains;
