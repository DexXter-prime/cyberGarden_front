import React, {useEffect, useState} from 'react';
import { useDrag, useDrop, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
import styles from './DataTable.module.css'
import {useModal} from "../../hooks/useModal";
import Modal from "../UI/Modal/Modal";
import Checkbox from "../UI/Checkbox/Checkbox";

const ItemType = 'AGE_BLOCK';



const DraggableAgeBlock = ({ age, rowIndex, columnIndex, moveBlock, owner, filterValues }) => {
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
    item: { age, rowIndex, columnIndex },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: ItemType,
    hover: (item) => {
      if (item.rowIndex !== rowIndex || item.columnIndex !== columnIndex) {
        moveBlock(item.rowIndex, item.columnIndex, rowIndex, columnIndex, item.age);
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
          <div ref={(node) => ref(drop(node))} style={{
              opacity: isDragging ? 0.5 : isVisibleFilter ? 0.6 : 1,
              cursor: 'move',
              backgroundColor: Array.isArray(owner) ? getColorForOwner(owner[columnIndex % owner.length]) : 'white',
          }}
               className={styles.train__Item}
               onClick={show}

          >
              {age}
          </div>
      </>
  );
};

const MyTable = ({ columns, initialRows, filterValues }) => {
  const [checkedRows, setCheckedRows] = useState(initialRows.filter((row) => row.status).map((row) => row.name))
  const [rows, setRows] = React.useState(() => [...initialRows]);

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

  const moveBlock = (fromRowIndex, fromColumnIndex, toRowIndex, toColumnIndex, age) => {
    setRows((prevRows) => {
      const updatedRows = [...prevRows];
      const fromRow = updatedRows[fromRowIndex];
      const toRow = updatedRows[toRowIndex];

      if (fromRow && toRow) {
        fromRow.age.splice(fromColumnIndex, 1);

        if (toRow.age) {
          toRow.age.splice(toColumnIndex, 0, age);
        } else {
          toRow.age = [age];
        }
      }

      return updatedRows;
    });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id}>{column.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, rowIndex) => (
              <TableRow key={row.id}>
                {columns.map((column, columnIndex) => (
                  <TableCell key={column.id}>
                    {
                      column.id === 'id' && <Checkbox label={row[column.id]} checked={checkedRows.includes(row.name)} onChange={(e) => handleCheck(e, row.name)} />
                    }
                    {column.id === 'age' && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                        {row.age &&
                          row.age.map((age, index) => (
                            <DraggableAgeBlock
                              key={index}
                              age={age}
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
                      !['age', 'id'].includes(column.id) && row[column.id]
                    }
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </DndProvider>
  );
};

export default MyTable;
