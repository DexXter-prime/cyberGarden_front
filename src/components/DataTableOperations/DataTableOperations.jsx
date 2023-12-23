import React from 'react';
import {DataGrid} from "@mui/x-data-grid";
import styles from './DataTableOperations.module.css'


const DataTableOperations = () => {

    const rows = [
        {
            id: 1,
            number: 1,
            name: 'Hello',
            'loc-num': 'World',
            vagons: 8,
            from: 'Новокузнецк Северный, Парк И путь № 1',
            where: 'Новокузнецк Северный, Парк И путь № 3',
            'min-len': '20',
            begin: '16.01.2023 11:32',
            end: '28.07.2001'
        },
        {
            id: 2,
            number: 2,
            name: 'Hello',
            'loc-num': 'World',
            vagons: 8,
            from: 'Новокузнецк Северный, Парк И путь № 1',
            where: 'Новокузнецк Северный, Парк И путь № 3',
            'min-len': '32',
            begin: '16.01.2023 11:32',
            end: '28.07.2001'
        },
        {
            id: 3,
            number: 3,
            name: 'Hello',
            'loc-num': 'World',
            vagons: 8,
            from: 'Новокузнецк Северный, Парк И путь № 1',
            where: 'Новокузнецк Северный, Парк И путь № 3',
            'min-len': '32',
            begin: '16.01.2023 11:32',
            end: '28.07.2001'
        },
        {

            id: 4,
            number: 4,
            name: 'Hello',
            'loc-num': 'World',
            vagons: 8,
            from: 'Новокузнецк Северный, Парк И путь № 1',
            where: 'Новокузнецк Северный, Парк И путь № 3',
            'min-len': '29',
            begin: '16.01.2023 11:32',
            end: '28.07.2001'
        },{

            id: 5,
            number: 5,
            name: 'Hello',
            'loc-num': 'World',
            vagons: 8,
            from: 'Новокузнецк Северный, Парк И путь № 1',
            where: 'Новокузнецк Северный, Парк И путь № 3',
            'min-len': '29',
            begin: '16.01.2023 11:32',
            end: '28.07.2001'
        },{

            id: 6,
            number: 6,
            name: 'Hello',
            'loc-num': 'World',
            vagons: 8,
            from: 'Новокузнецк Северный, Парк И путь № 1',
            where: 'Новокузнецк Северный, Парк И путь № 3',
            'min-len': '29',
            begin: '16.01.2023 11:32',
            end: '28.07.2001'
        },{

            id: 7,
            number: 7,
            name: 'Hello',
            'loc-num': 'World',
            vagons: 8,
            from: 'Новокузнецк Северный, Парк И путь № 1',
            where: 'Новокузнецк Северный, Парк И путь № 3',
            'min-len': '29',
            begin: '16.01.2023 11:32',
            end: '28.07.2001'
        },{

            id: 8,
            number: 8,
            name: 'Hello',
            'loc-num': 'World',
            vagons: 8,
            from: 'Новокузнецк Северный, Парк И путь № 1',
            where: 'Новокузнецк Северный, Парк И путь № 3',
            'min-len': '29',
            begin: '16.01.2023 11:32',
            end: '28.07.2001'
        },{

            id: 9,
            number: 9,
            name: 'Hello',
            'loc-num': 'World',
            vagons: 8,
            from: 'Новокузнецк Северный, Парк И путь № 1',
            where: 'Новокузнецк Северный, Парк И путь № 3',
            'min-len': '29',
            begin: '16.01.2023 11:32',
            end: '28.07.2001'
        },{

            id: 10,
            number: 10,
            name: 'Hello',
            'loc-num': 'World',
            vagons: 8,
            from: 'Новокузнецк Северный, Парк И путь № 1',
            where: 'Новокузнецк Северный, Парк И путь № 3',
            'min-len': '29',
            begin: '16.01.2023 11:32',
            end: '28.07.2001'
        },
    ];

    const columns = [
        { field: 'number', headerName: '№ Операции', width: 100,
            headerAlign: 'center',
            align: 'center'},
        { field: 'name', headerName: 'Операция', width: 200,
            headerAlign: 'center',
            align: 'center' },
        { field: 'loc-num', headerName: '№ лок-ва', width: 100,
            headerAlign: 'center',
            align: 'center' },
        { field: 'vagons', headerName: 'Вагоны', width: 100,
            headerAlign: 'center',
            align: 'center' },
        { field: 'from', headerName: 'Откуда', width: 350,
            headerAlign: 'center',
            align: 'center' },
        { field: 'where', headerName: 'Куда', width: 350,
            headerAlign: 'center',
            align: 'center' },
        { field: 'min-len', headerName: 'Длит. мин', width: 120, height: 5,
            headerAlign: 'center',
            align: 'center' },
        { field: 'begin', headerName: 'Начало', width: 150,
            headerAlign: 'center',
            align: 'center' },
        { field: 'end', headerName: 'Окончание', width: 150,
            headerAlign: 'center',
            align: 'center' },
    ];



    return (
        <>
            <DataGrid
                rows={rows}
                columns={columns}
                getRowClassName={(params) => params.indexRelativeToCurrentPage % 2 === 0 ? styles.even  : styles.odd}
                getCellClassName={(params) => {
                    if (params.field === 'min-len' && params.value > 30) {
                        return styles.overTime
                    }
                    return ''
                }}
            />
        </>
    );
};

export default DataTableOperations;