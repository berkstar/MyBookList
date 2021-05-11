import React, { useState } from 'react';
import Grid from "@material-ui/core/Grid";
import { TextField } from '@material-ui/core';
import Typography from "@material-ui/core/Typography";
import EditIcon from '@material-ui/icons/Edit';
import { Dropdown } from 'semantic-ui-react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'isbn', label: 'ISBN', minWidth: 100 },
    {
      id: 'pagenumber',
      label: 'Page Number',
      minWidth: 170,
      align: 'right',
    },
  ];



const bookOptions = [
    {
      key: 'Lord of The Rings',
      text: 'Lord of The Rings',
      value: 'Lord of The Rings',
    },
    {
      key: 'Elliot Fu',
      text: 'Elliot Fu',
      value: 'Elliot Fu',
    },
    {
      key: 'Stevie Feliciano',
      text: 'Stevie Feliciano',
      value: 'Stevie Feliciano',
    },
    {
      key: 'Christian',
      text: 'Christian',
      value: 'Christian',
    },
    {
      key: 'Matt',
      text: 'Matt',
      value: 'Matt',
    },
    {
      key: 'Justen Kitsune',
      text: 'Justen Kitsune',
      value: 'Justen Kitsune',
    },
  ]

export default function EditBookList() {
    var selected = {};

    const [rows, setRows] = useState([
        {name: 'Harry Potter', isbn: 1287548657, pagenumber: 375},
        {name: 'Hitchhikers Guide to the Galaxy', isbn: 4846124785, pagenumber: 477},
        {name: 'Gilgamesh', isbn: 9876152457, pagenumber: 622},
        {name: 'The Prince', isbn: 9875421547, pagenumber: 115},
    ]);

    function addBook(selection) {
        let newRow = { name: selection.value, isbn: 111111, pagenumber: 555};
        let newRows = rows.push(newRow);
        setRows(newRows);
    }

    return (
        <div id='about' >
            <Grid style={{ marginLeft: 50, marginTop: 50}}>
                <Grid container>
                    <Grid>
                        <Typography component="h4" variant="h4" xs={10}>
                            Create New Book List
                        </Typography>
                        <br/>
                        <h3>List Name <EditIcon/></h3> 
                        <TextField
                            variant="filled"
                            label="Name"
                            >
                        </TextField> 
                        <br/>
                        <h3>Search for books</h3> 
                        <Dropdown
                            placeholder='Select Book'
                            fluid
                            search
                            selection={selected}
                            options={bookOptions}
                            onClick={()=>{addBook(selected)}}
                        />
                    </Grid>
                    <TableContainer>
                        <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                            {columns.map((column) => (
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
                            {rows.map((row) => {
                                return (
                                    <TableRow>
                                    {columns.map((column) => {
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
                    </TableContainer>
                </Grid>
            </Grid>
        </div>
    );
}