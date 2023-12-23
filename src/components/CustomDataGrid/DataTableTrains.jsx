import React, { useState } from 'react';
import { useDrag, useDrop, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';

const ItemType = 'AGE_BLOCK';


const DraggableAgeBlock = ({ age, index, rowIndex, moveBlock }) => {
    const [, ref] = useDrag({
        type: ItemType,
        item: { index, rowIndex },
    });

    const [, drop] = useDrop({
        accept: ItemType,
        hover: (draggedItem) => {
            if (draggedItem.rowIndex !== rowIndex) {
                moveBlock(draggedItem.rowIndex, rowIndex, draggedItem.index);
                draggedItem.rowIndex = rowIndex;
            } else if (draggedItem.index !== index) {
                moveBlock(rowIndex, draggedItem.index, index);
                draggedItem.index = index;
            }
        },
    });

    return (
        <div ref={(node) => ref(drop(node))} style={{ backgroundColor: 'red', marginRight: '5px' }}>
            {age}
        </div>
    );
};

const MyTable = ({ columns, initialRows }) => {
    const [rows, setRows] = useState(() => [...initialRows]);

    const moveBlock = (fromRowIndex, toRowIndex, fromIndex) => {
        setRows((prevRows) => {
            const updatedRows = [...prevRows];
            const fromRow = updatedRows[fromRowIndex];
            const toRow = updatedRows[toRowIndex];

            if (fromRow && toRow && fromRow.age && toRow.age) {
                const movedBlock = { ...fromRow.age[fromIndex] };
                fromRow.age.splice(fromIndex, 1);
                toRow.age.splice(fromIndex, 0, movedBlock);
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
                                {columns.map((column) => (
                                    <TableCell key={column.id}>
                                        {column.id === 'age' ? (
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                {row.age && row.age.map && row.age.map((age, index) => (
                                                    <DraggableAgeBlock
                                                        key={index}
                                                        age={age}
                                                        index={index}
                                                        rowIndex={rowIndex}
                                                        moveBlock={moveBlock}
                                                    />
                                                ))}
                                            </div>
                                        ) : (
                                            row[column.id]
                                        )}
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
