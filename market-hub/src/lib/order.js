import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  { id: 'invoice', label: 'Invoice', minWidth: 170 },
  { id: 'customer', label: 'Customer', minWidth: 100 },
  {
    id: 'address',
    label: 'Address',
    minWidth: 170,
    align: 'right',
   
  },
  {
    id: 'quantity',
    label: 'Quantity',
    minWidth: 170,
    align: 'right',
  
  },
  {
    id: 'price',
    label: 'Price',
    minWidth: 170,
    align: 'right',
   
  },
  {
    id: 'status',
    label: 'Status',
    minWidth: 170,
    align: 'right',
   
  },
];


const rows = [
{ invoice: 1 + Math.floor(Math.random() * 10000),
customer: 'John Doe',
address: 'Lagos',
quantity: 5,
price: '$3000',
status: 'pending'


},
{ invoice: 1 + Math.floor(Math.random() * 10000),
    customer: 'John Doe',
    address: 'Lagos',
    quantity: 5,
    price: '$3000',
    status: 'pending'
    
    
    }
  
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  tableWrapper: {
    maxHeight: 440,
    overflow: 'auto',
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map(column => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}