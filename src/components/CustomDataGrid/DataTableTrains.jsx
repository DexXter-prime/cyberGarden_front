import React from 'react';
import { useDrag, useDrop, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';

const ItemType = 'AGE_BLOCK';

const DraggableAgeBlock = ({ age, rowIndex, columnIndex, moveBlock }) => {
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
    <div ref={(node) => ref(drop(node))} style={{ opacity: isDragging ? 0.5 : 1, cursor: 'move', }}>
      {age}
    </div>
  );
};

const MyTable = ({ columns, initialRows }) => {
  const [rows, setRows] = React.useState(() => [...initialRows]);

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
                    {column.id === 'age' ? (
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        {row.age &&
                          row.age.map((age, index) => (
                            <DraggableAgeBlock
                              key={index}
                              age={age}
                              rowIndex={rowIndex}
                              columnIndex={index}
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
