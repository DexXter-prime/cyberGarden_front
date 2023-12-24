import React, {useEffect, useMemo, useState} from 'react';
import styles from './Trains.module.css'
import {useModal} from "../../hooks/useModal";
import Modal from '../../components/UI/Modal/Modal'
import DataTableTrains from "../../components/CustomDataGrid/DataTableTrains";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useFetcher, useLocation, useParams} from "react-router-dom";
import axios from "axios";
import {useFetching} from "../../hooks/useFetching";
import StationController from "../../API/StationService/StationController";


const Trains = () => {
    const { id } = useParams()
    const [station, setStation] = useState({})
    const [selectedOwner, setSelectedOwner] = useState('');
    const [selectedWagonType, setSelectedWagonType] = useState('');
    const [selectedValidity, setSelectedValidity] = useState('');
    const [selectedDowntime, setSelectedDowntime] = useState('');
    const [selectedDaysToRepair, setSelectedDaysToRepair] = useState('');

    const [request, loadingStatus, errMsg] = useFetching(async (id) => {
        const res = await StationController.getStation(id)
        setStation(res.data);
        console.log(res.dataй)
    })


    useEffect(() => {
        request(id)
    }, [])




    const [filterValues, setFilterValues] = useState({
        owner: '',
        wagonType: '',
        validity: '',
        downtime: '',
        daysToRepair: '',
    });

   // const parks = ['one', 'two', 'three']

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
            <h1 style={{textAlign: 'center', marginBottom: '30px'}}>Название станции: {station.name}</h1>
            <DndProvider backend={HTML5Backend}>
                <div style={{marginTop: '40px 0'}} className={styles.container__filter}>
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
                { station?.parks?.map((park) => (
                    <div key={park.id} className={styles.parkItem}>
                        <div className={styles.parkName}>
                            <h3>{park.name}</h3>
                        </div>
                        <DataTableTrains initialRows={park.ways} filterValues={filterValues}/>
                    </div>
                ))}
            </DndProvider>
        </div>
    );
};

export default Trains;
