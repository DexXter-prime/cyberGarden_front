import React, {useEffect, useState} from 'react';
import { useDrag, useDrop, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
import styles from './DataTable.module.css'
import {useModal} from "../../hooks/useModal";
import Modal from "../UI/Modal/Modal";
import Checkbox from "../UI/Checkbox/Checkbox";

const ItemType = 'AGE_BLOCK';
const ItemLocomotive = 'LOCO_BLOCK'

const DraggableLocomotive = ({ locomotive, rowIndex,  moveBlock, columnIndex}) => {
    const isVisibleFilter = '';
    const [isVisible, show, close] = useModal()
    const [{ isDragging }, ref] = useDrag({
        type: ItemLocomotive,
        item: { locomotive, rowIndex, columnIndex },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    });

    const [, drop] = useDrop({
        accept: ItemLocomotive,
        hover: (item) => {
            if (item.rowIndex !== rowIndex || item.columnIndex !== columnIndex) {
                moveBlock(item.rowIndex, item.columnIndex, rowIndex, columnIndex, item.locomotive);
                item.rowIndex = rowIndex;
                item.columnIndex = columnIndex;
            }
        },
    });

    return (
        <div ref={(node) => ref(drop(node))} style={{
            opacity: isDragging ? 0.5 : isVisibleFilter ? 0.6 : 1,
            cursor: 'move',
            width: 20,
            height: 20,
            background: 'black'
        }}
             onClick={show}

        >
            {locomotive?.id}
        </div>
    );
}



const DraggableAgeBlock = ({ wagon, rowIndex, columnIndex, moveBlock, owner, filterValues }) => {
    const [isVisible, show, close] = useModal()

    const ownerColors = {
        'HTC': 'red',
        'GK': 'blue',
        'ATL': 'green',
        'PGK': 'orange',
        'MOD': 'purple',
        'RJD': 'brown',
        'NPK': 'pink',
        'FGK': 'teal',
        'MECH': 'cyan',
        'AGENT': 'lime',
        'OTHER': 'grey'
    };

  const getColorForOwner = (ownerValue) => ownerColors[ownerValue];
  const isVisibleFilter = filterValues.wagonType === '';

  const [{ isDragging }, ref] = useDrag({
    type: ItemType,
    item: { wagon, rowIndex, columnIndex },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: ItemType,
    hover: (item) => {
      if (item.rowIndex !== rowIndex || item.columnIndex !== columnIndex) {
        moveBlock(item.rowIndex, item.columnIndex, rowIndex, columnIndex, item.wagons);
        item.rowIndex = rowIndex;
        item.columnIndex = columnIndex;
      }
    },
  });
  return (
      <>
        {
            isVisible &&  <Modal closeModal={close}>
              <div className={styles.modal}>
                  <div className={styles.modal__header}>
                      Вагон № {wagon.inventoryNumber}
                  </div>
                  <ul>
                      <li className={styles.modal__item}>
                          <h4>
                              Номер пути
                          </h4>
                          <p>{wagon.WayId}</p>
                      </li>
                      <li className={styles.modal__item}>
                          <h4>
                              Собственник
                          </h4>
                          <p>{wagon.owner}</p>
                      </li>
                      <li className={styles.modal__item}>
                          <h4>
                              Дни восстановления
                          </h4>
                          <p>{wagon.daysToRepair}</p>
                      </li>
                      <li className={styles.modal__item}>
                          <h4>
                              Грязный
                          </h4>
                          <p>{wagon.isDirty ? 'Да' : 'Нет'}</p>
                      </li>
                      <li className={styles.modal__item}>
                          <h4>
                              Больной
                          </h4>
                          <p>{wagon.isSick ? 'Да' : 'Нет'}</p>
                      </li>
                      <li className={styles.modal__item}>
                          <h4>
                              Пробег
                          </h4>
                          <p>{wagon.kilometersLeft}</p>
                      </li>
                      <li className={styles.modal__item}>
                          <h4>
                              Грузоподъемность
                          </h4>
                          <p>{wagon.loadCapacity}</p>
                      </li>
                      <li className={styles.modal__item}>
                          <h4>
                              Тип вагона
                          </h4>
                          <p>{wagon.wagonType}</p>
                      </li>
                  </ul>
              </div>
            </Modal>
        }
          <div ref={(node) => ref(drop(node))} style={{
              opacity: isDragging ? 0.5 : isVisibleFilter ? 0.6 : 1,
              cursor: 'move',
              backgroundColor: Array.isArray(owner) ? getColorForOwner(owner[columnIndex % owner.length]) : 'white',
          }}
               className={styles.train__Item}
               onClick={show}

          >
              {wagon?.id}
          </div>
      </>
  );
};

const MyTable = ({ initialRows, filterValues }) => {
  const [rows, setRows] = React.useState(
      initialRows.map((way) => ({
          id: way.id,
          name: way.name,
          wagons: way.wagons,
          ...(way.locomotives && {locomotive: way.locomotives[0]}),
          owner: ['HTC', 'GK', 'OTHER'],
          status: false
      }))
  );

    const columns = [
        { id: 'id', label: '№ Пути', width: 20, align: 'center' },
        { id: 'left', label: 'Левый', width: 10, align: 'center'},
        { id: 'name', label: 'Название', width: 20, align: 'center' },
        { id: 'wagons', label: 'Л', width: 100, align: 'center' },
        { id: 'right', label: 'Правый', width: 10, align: 'center'},
    ]

    const [checkedRows, setCheckedRows] = useState(rows.filter((row) => row.status).map((row) => row.name))


    const handleCheck = (event, name) => {
    if (event.target.checked) {
      setCheckedRows(prev => [...prev, name])
    } else {
      let newList = [...checkedRows]
      newList.splice(checkedRows.indexOf(name), 1)
      setCheckedRows(newList)
    }

  }

  useEffect(() => {
    console.log(checkedRows)
  }, [checkedRows])

  const moveBlock = (fromRowIndex, fromColumnIndex, toRowIndex, toColumnIndex, wagons) => {
    setRows((prevRows) => {
      const updatedRows = [...prevRows];
      const fromRow = updatedRows[fromRowIndex];
      const toRow = updatedRows[toRowIndex];

      if (fromRow && toRow) {
        fromRow.wagons.splice(fromColumnIndex, 1);

        if (toRow.wagons) {
          toRow.wagons.splice(toColumnIndex, 0, wagons);
        } else {
          toRow.wagons = [wagons];
        }
      }

      return updatedRows;
    });
  };

  return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} >{column.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, rowIndex) => (
              <TableRow key={row.id}>
                {columns.map((column, columnIndex) => (
                  <TableCell key={column.id}>
                    {
                        (column.id === 'right' || column.id === 'left') &&
                        <div style={{ width: 60, height: 60, border: '1px solid rgba(0,0,0, .5)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            {
                                (column.id === 'left' && row.locomotive?.direction === 'LEFT') && <DraggableLocomotive owner={row.owner} locomotive={row.locomotive} rowIndex={rowIndex} columnIndex={columnIndex} moveBlock={moveBlock} />
                            }
                            {
                                (column.id === 'right' && row.locomotive?.direction === 'RIGHT') && <DraggableLocomotive owner={row.owner} locomotive={row.locomotive} rowIndex={rowIndex} columnIndex={columnIndex} moveBlock={moveBlock} />
                            }
                        </div>
                    }
                    {
                      column.id === 'id' && <Checkbox label={row[column.id]} checked={checkedRows.includes(row.name)} onChange={(e) => handleCheck(e, row.name)} />
                    }
                    {column.id === 'wagons' && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: 20, height: 50 }}>
                        {row.wagons &&
                          row.wagons.map((wagon, index) => (
                            <DraggableAgeBlock
                              key={index}
                              wagon={wagon}
                              rowIndex={rowIndex}
                              columnIndex={index}
                              moveBlock={moveBlock}
                              owner={row.owner}
                              filterValues={filterValues}
                            />
                          ))}
                      </div>
                    )}
                    {
                      !['wagons', 'id'].includes(column.id) && row[column.id]
                    }
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
  );
};

export default MyTable;
